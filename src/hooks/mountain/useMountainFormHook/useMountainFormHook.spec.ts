import { act, renderHook } from '@testing-library/react'
import { mock, mockDeep, mockReset } from 'jest-mock-extended'
import * as reactGoogleMap from '@react-google-maps/api'
import { useMountainFormHook } from './useMountainFormHook'
const useGoogleMapSpy = jest.spyOn(reactGoogleMap, 'useGoogleMap')

afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})

const map = mock<google.maps.Map>()

beforeEach(() => {
  mockReset(map) // or mockClear(mock)
})
describe('onLoad', () => {
  it('should set auto complete', () => {
    const { result } = renderHook(() => useMountainFormHook())
    expect(result.current.autoComplete).toEqual(undefined)
    const autoComplete = mock<google.maps.places.Autocomplete>()
    act(() => {
      result.current.onLoad(autoComplete)
    })
    expect(result.current.autoComplete).toEqual(autoComplete)
  })
})
describe('when placeResult is empty', () => {
  it('should return undefined when place result is undefined', () => {
    const { result } = renderHook(() => useMountainFormHook())
    expect(result.current.onPlaceChanged()).toEqual(undefined)
  })
})
describe('when placeResult is filled ', () => {
  beforeEach(() => {
    mockReset(map) // or mockClear(mock)
  })
  const placeResult = mockDeep<google.maps.places.PlaceResult>()
  placeResult!.geometry!.location!.lat.mockReturnValue(1)
  placeResult!.geometry!.location!.lng.mockReturnValue(2)
  placeResult!.name = 'foo'
  const autoComplete = mock<google.maps.places.Autocomplete>()
  autoComplete.getPlace.mockReturnValue(placeResult)
  it('should return values when place result is filled', () => {
    map.setCenter.calledWith({ lat: 1, lng: 1 })

    const { result } = renderHook(() => useMountainFormHook())

    act(() => {
      result.current.onLoad(autoComplete)
    })
    act(() => {
      expect(result.current.onPlaceChanged()).toEqual({ name: 'foo', lat: 1, lng: 2 })
    })
  })
  it('when map is empty', () => {
    useGoogleMapSpy.mockReturnValueOnce(null)
    const { result } = renderHook(() => useMountainFormHook())
    map.setCenter.calledWith({ lat: 1, lng: 1 })

    act(() => {
      result.current.onLoad(autoComplete)
    })
    act(() => {
      expect(result.current.onPlaceChanged()).toEqual({ name: 'foo', lat: 1, lng: 2 })
    })
    expect(map.setZoom).not.toHaveBeenCalled()
  })
  it('when map is filled', () => {
    useGoogleMapSpy.mockReturnValueOnce(true as any)

    const { result } = renderHook(() => useMountainFormHook())

    act(() => {
      result.current.onLoad(autoComplete)
    })
    act(() => {
      expect(result.current.onPlaceChanged()).toEqual({ name: 'foo', lat: 1, lng: 2 })
    })
    // expect(map.setZoom).toHaveBeenCalledWith(14)
  })
})
