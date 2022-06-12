import { act, fireEvent, screen } from '@testing-library/react'

import { getMockSession, testMockedRender } from '@/src/utils/test-util'
import { useGoogleMap } from '@react-google-maps/api'
import { mock } from 'jest-mock-extended'
import EditRoutePage from '@/pages/mountains/[mid]/routes/[rid]/edit'

const mockPush = jest.fn()
jest.mock('next/dist/client/router', () => ({
  __esModule: true,
  useRouter: () => ({
    query: { mid: 1, rid: 1 },
    pathname: '/',
    asPath: '/',
    events: {
      emit: jest.fn(),
      on: jest.fn(),
      off: jest.fn(),
    },
    push: mockPush,
    prefetch: jest.fn(() => Promise.resolve(true)),
    replace: jest.fn(() => Promise.resolve(true)),
  }),
}))
const mockPolyline = mock<google.maps.Polyline>()

jest.mock('@/src/hooks/useEditablePolyline/useEditablePolyline', () => ({
  __esModule: true,
  useEditablePolyline: () => ({
    polyline: mockPolyline,
    getLatlngs: jest.fn().mockReturnValue([{ lat: 1, lng: 1 }]),
  }),
}))
jest.mock(
  'react-window-infinite-loader',
  () =>
    ({ children }: any) =>
      children({ height: 600, width: 600 }),
)

import * as session from 'next-auth/react'
import * as reactGoogleMap from '@react-google-maps/api'
import {
  newEditedRouteData,
  newEditedRouteResponse,
  newLatlng,
  newMountain,
  newUpdateRouteWithSessionResponse,
} from '@/graphql/generated/client'
const useGoogleMapSpy = jest.spyOn(reactGoogleMap, 'useGoogleMap')
const useSessionSpy = jest.spyOn(session, 'useSession')

useSessionSpy.mockReturnValue(getMockSession('authenticated', 1))

describe('EditRoutePage', () => {
  const map = useGoogleMap()
  const latLngBounds = mock<google.maps.LatLngBounds>()
  map!.getBounds = jest.fn().mockReturnValue(latLngBounds)
  const editedRouteData = newEditedRouteData({
    route: {
      id: 1,
      userId: 1,
      name: 'foo',
      time: 100,
      mountain: newMountain({
        name: 'bar',
      }),
      latlngs: [
        newLatlng({ id: 1, lat: 1111, lng: 2222 }),
        newLatlng({ id: 2, lat: 3333, lng: 4444 }),
      ],
    },
  })
  const queryResponse = newEditedRouteResponse(
    {
      where: {
        id: 1,
      },
    },
    editedRouteData,
  )
  const mutationResponse = newUpdateRouteWithSessionResponse(
    {
      data: {
        name: {
          set: 'bar',
        },
        userId: 1,
        time: {
          set: 200,
        },
        latlngs: {
          create: [{ lat: 1, lng: 1 }],
        },
      },
      where: {
        id: 1,
      },
    },
    {
      updateRouteWithSession: {
        id: 1,
        name: 'bar',
      },
    },
  )
  const mockedMutation = {
    ...mutationResponse,
    result: jest.fn(() => mutationResponse.result),
  }
  const mocks = [queryResponse, mockedMutation]

  test('should update route', async () => {
    await act(() => {
      testMockedRender(<EditRoutePage data={{ query: editedRouteData }} />, mocks)
    })
    await act(() => {
      new Promise((resolve) => setTimeout(resolve, 0))
    })

    expect(screen.getByDisplayValue('foo')).toBeTruthy()
    expect(screen.getByDisplayValue('100')).toBeTruthy()

    const name = screen.getByTestId('name-input')
    const time = screen.getByTestId('time-input')

    await act(() => {
      fireEvent.change(name, { target: { value: 'bar' } })
      fireEvent.change(time, { target: { value: '200' } })
    })

    expect(screen.getByDisplayValue('bar')).toBeInTheDocument()
    expect(screen.getByDisplayValue('200')).toBeInTheDocument()

    await act(() => {
      fireEvent.submit(screen.getByText('Update route'))
    })

    expect(mocks[1].result).toHaveBeenCalled()
    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/mountains/[mid]/routes/[rid]',
      query: {
        mid: 1,
        rid: 1,
      },
    })
  })
})
