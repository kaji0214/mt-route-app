import { renderHook } from '@testing-library/react'
import { ShowMountainFragment, ShowMountainQuery } from '@/graphql/generated/client'
import { mock, mockDeep, mockReset } from 'jest-mock-extended'
import { getMockSession } from '@/src/utils/test-util'
import { NextRouter } from 'next/router'
import * as router from 'next/router'
import * as session from 'next-auth/react'
import * as reactGoogleMap from '@react-google-maps/api'
import { useShowMountainHook } from '@/src/hooks/mountain/useShowMountainHook/useShowMountainHook'
const useGoogleMapSpy = jest.spyOn(reactGoogleMap, 'useGoogleMap')
const useSessionSpy = jest.spyOn(session, 'useSession')

useSessionSpy.mockReturnValue(getMockSession('authenticated', 1))

const mockPush = jest.fn()
const mockRouter = mock<NextRouter>()
const spyUseRouter = jest.spyOn(router, 'useRouter')
spyUseRouter.mockReturnValue({ ...mockRouter, query: { mid: '1' }, push: mockPush })

afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
const fragment: ShowMountainFragment = {
  id: 111,
  lat: 1,
  lng: 1,
  userId: 1,
  name: 'foo',
  _count: {
    routes: 1,
  },
  routes: [],
}
const query: ShowMountainQuery = {
  mountain: fragment,
}

const map = mockDeep<google.maps.Map>()
map.setCenter.calledWith({ lat: 1, lng: 1 })
useGoogleMapSpy.mockReturnValue(map)
const props = { query }
describe('useEffect', () => {
  beforeEach(() => {
    mockReset(map) // or mockClear(mock)
  })
  test('when map is defined', () => {
    const { result } = renderHook(() => useShowMountainHook(props))
    expect(map.setCenter).toHaveBeenCalled()
  })
  test('when map is null', () => {
    useGoogleMapSpy.mockReturnValueOnce(null)
    const { result } = renderHook(() => useShowMountainHook(props))
    expect(map.setCenter).not.toHaveBeenCalled()
  })
})
describe('event test', () => {
  test('onClickAddRoute', () => {
    const { result } = renderHook(() => useShowMountainHook(props))

    result.current.onClickAddRoute()
    expect(mockPush).toHaveBeenCalledWith(`/mountains/111/routes/new`)
  })
  test('onClickEditMountain', () => {
    const { result } = renderHook(() => useShowMountainHook(props))

    result.current.onClickEditMountain()
    expect(mockPush).toHaveBeenCalledWith(`/mountains/111/edit`)
  })
})
describe('canEdit', () => {
  test('when session exists', () => {
    const { result } = renderHook(() =>
      useShowMountainHook({
        ...props,
        query: { mountain: { ...fragment, userId: 1 } },
      }),
    )
    expect(result.current.canEdit).toBe(true)
  })
  test('when session not found', () => {
    const { result } = renderHook(() =>
      useShowMountainHook({
        ...props,
        query: { mountain: { ...fragment, userId: 2 } },
      }),
    )
    expect(result.current.canEdit).toBe(false)
  })
})
describe('canDelete', () => {
  test('should be true', () => {
    const { result } = renderHook(() =>
      useShowMountainHook({
        ...props,
        query: { mountain: { ...fragment, _count: { routes: 0 } } },
      }),
    )
    expect(result.current.canDelete).toBe(true)
  })
  it('should be false', () => {
    const { result } = renderHook(() =>
      useShowMountainHook({
        ...props,
        query: { mountain: { ...fragment, _count: { routes: 1 } } },
      }),
    )
    expect(result.current.canDelete).toBe(false)
  })
})
