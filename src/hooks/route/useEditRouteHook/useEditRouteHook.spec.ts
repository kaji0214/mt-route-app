import { renderHook } from '@testing-library/react'
import { mockDeep, mockReset } from 'jest-mock-extended'
import { mockMap } from '@/src/utils/test-util'
import * as reactGoogleMap from '@react-google-maps/api'
import { newEditedRouteData } from '@/graphql/generated/client'
import { useEditRouteHook, UseEditRouteHookProps } from './useEditRouteHook'
import * as useEditablePolyline from '@/src/hooks/useEditablePolyline/useEditablePolyline'
const spyUseEditablePolyline = jest.spyOn(useEditablePolyline, 'useEditablePolyline')

const mockPolyline = mockDeep<google.maps.Polyline>()
const defaultUseEditablePolylineReturnValues = {
  polyline: mockPolyline,
  getLatlngs: jest.fn().mockReturnValue([{ lat: 1, lng: 2 }]),
}
spyUseEditablePolyline.mockReturnValue(defaultUseEditablePolylineReturnValues)

const spyUseGoogleMap = jest.spyOn(reactGoogleMap, 'useGoogleMap')
spyUseGoogleMap.mockReturnValue(mockMap)

afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})

const editedRouteData = newEditedRouteData({
  route: {
    id: 1,
    userId: 1,
    name: 'foo',
    mountain: {
      id: 1,
      name: 'bar',
      lat: 1,
      lng: 1,
    },
    latlngs: [{ lat: 1, lng: 2 }],
  },
})

const props: UseEditRouteHookProps = { query: editedRouteData }
describe('useEffect', () => {
  beforeEach(() => {
    mockReset(mockMap) // or mockClear(mock)
  })
  test('when map is defined', () => {
    const { result } = renderHook(() => useEditRouteHook(props))
    expect(mockMap.setCenter).toHaveBeenCalled()
  })
  test('when map is null', () => {
    spyUseGoogleMap.mockReturnValueOnce(null)
    const { result } = renderHook(() => useEditRouteHook(props))
    expect(mockMap.setCenter).not.toHaveBeenCalled()
  })
  test('when polyline is defined', () => {
    const { result } = renderHook(() => useEditRouteHook(props))
    expect(mockPolyline.setPath).toHaveBeenCalled()
  })
})
