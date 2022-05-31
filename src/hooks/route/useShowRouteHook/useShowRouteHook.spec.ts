import { renderHook } from '@testing-library/react'
import { mock, mockReset } from 'jest-mock-extended'
import { getMockSession, mockMap } from '@/src/utils/test-util'
import * as reactGoogleMap from '@react-google-maps/api'
import * as nextRouter from 'next/router'
import { NextRouter } from 'next/router'
import * as nextAuth from 'next-auth/react'
import { newShowRouteData, ShowRouteQueryFragment } from '@/graphql/generated/client'
import { useShowRouteHook, UseShowRouteHookProps } from './useShowRouteHook'

const spyUseSession = jest.spyOn(nextAuth, 'useSession')
spyUseSession.mockReturnValue(getMockSession('authenticated', 1))
const spyUseGoogleMap = jest.spyOn(reactGoogleMap, 'useGoogleMap')
spyUseGoogleMap.mockReturnValue(mockMap)
const spyUseRouter = jest.spyOn(nextRouter, 'useRouter')
const mockPush = jest.fn()
const mockRouter = mock<NextRouter>()
spyUseRouter.mockReturnValue({ ...mockRouter, query: { mid: '1' }, push: mockPush })

afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})

const fragment: ShowRouteQueryFragment = {
  id: 1,
  userId: 1,
  name: 'foo',
  mountain: {
    id: 1,
    name: 'bar',
    lat: 1,
    lng: 1,
  },
  latlngs: [],
}

const props: UseShowRouteHookProps = { query: newShowRouteData({ route: fragment }) }
describe('useEffect', () => {
  beforeEach(() => {
    mockReset(mockMap) // or mockClear(mock)
  })
  test('when map is defined', () => {
    const { result } = renderHook(() => useShowRouteHook(props))
    expect(mockMap.setCenter).toHaveBeenCalled()
  })
  test('when map is null', () => {
    spyUseGoogleMap.mockReturnValueOnce(null)
    const { result } = renderHook(() => useShowRouteHook(props))
    expect(mockMap.setCenter).not.toHaveBeenCalled()
  })
})
describe('event check', () => {
  test('onClickEditRoute', () => {
    const { result } = renderHook(() => useShowRouteHook(props))
    result.current.onClickEditRoute()
    expect(mockPush).toHaveBeenCalledWith(`/mountains/1/routes/1/edit`)
  })
})
describe('canEdit', () => {
  test('when session found', () => {
    const { result } = renderHook(() =>
      useShowRouteHook({
        ...props,
        query: newShowRouteData({ route: { ...fragment, userId: 1 } }),
      }),
    )
    expect(result.current.canEdit).toBe(true)
  })
  test('when session not found', () => {
    const { result } = renderHook(() =>
      useShowRouteHook({
        ...props,
        query: newShowRouteData({ route: { ...fragment, userId: 2 } }),
      }),
    )
    expect(result.current.canEdit).toBe(false)
  })
})
describe('canDelete', () => {
  test('when session found', () => {
    const { result } = renderHook(() =>
      useShowRouteHook({
        ...props,
        query: newShowRouteData({ route: { ...fragment, userId: 1 } }),
      }),
    )
    expect(result.current.canDelete).toBe(true)
  })
  test('when session not found', () => {
    const { result } = renderHook(() =>
      useShowRouteHook({
        ...props,
        query: newShowRouteData({ route: { ...fragment, userId: 2 } }),
      }),
    )
    expect(result.current.canDelete).toBe(true)
  })
})
