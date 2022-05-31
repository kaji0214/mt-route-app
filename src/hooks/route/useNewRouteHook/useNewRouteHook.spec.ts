import { renderHook } from '@testing-library/react'
import { newMountain, newNewRouteData } from '@/graphql/generated/client'
import { mockDeep, mockReset } from 'jest-mock-extended'
import { mockMap } from '@/src/utils/test-util'
import * as reactGoogleMap from '@react-google-maps/api'
import {
  useNewRouteHook,
  UseNewRouteHookProps,
} from '@/src/hooks/route/useNewRouteHook/useNewRouteHook'

const spyUseGoogleMap = jest.spyOn(reactGoogleMap, 'useGoogleMap')
spyUseGoogleMap.mockReturnValue(mockMap)

const mockPolyline = mockDeep<google.maps.Polyline>()

jest.mock('@/src/hooks/useEditablePolyline/useEditablePolyline', () => ({
  __esModule: true,
  useEditablePolyline: () => ({
    polyline: mockPolyline,
    getLatlngs: jest.fn().mockImplementation(() => [{ lat: 1, lng: 1 }]),
  }),
}))
afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
const query = newNewRouteData({ mountain: newMountain() })

const props: UseNewRouteHookProps = { query }
describe('useEffect', () => {
  beforeEach(() => {
    mockReset(mockMap)
    // or mockClear(mock)
  })
  test('when map is defined', () => {
    const { result } = renderHook(() => useNewRouteHook(props))
    expect(mockMap.setCenter).toHaveBeenCalled()
  })
  test('when map is null', () => {
    spyUseGoogleMap.mockReturnValue(null)
    const { result } = renderHook(() => useNewRouteHook(props))
    expect(mockMap.setCenter).not.toHaveBeenCalled()
  })
})
describe('handle', () => {
  test('polyline', () => {
    const { result } = renderHook(() => useNewRouteHook(props))
    expect(result.current.polyline).toEqual(mockPolyline)
  })
  test('getLatlngs', () => {
    const { result } = renderHook(() => useNewRouteHook(props))
    const latlngs = result.current.getLatlngs()
    expect(latlngs).toEqual([{ lat: 1, lng: 1 }])
  })
})
