import { act, fireEvent, screen } from '@testing-library/react'
import { getMockSession, testMockedRender } from '@/src/utils/test-util'
import ShowMountainPage from '@/pages/mountains/[mid]'
import * as nextAuth from 'next-auth/react'
import {
  newDeleteMountainWithSessionData,
  newDeleteMountainWithSessionResponse,
  newRoute,
  newShowMountainData,
  newShowMountainResponse,
} from '@/graphql/generated/client'
const spyUseSession = jest.spyOn(nextAuth, 'useSession')
spyUseSession.mockReturnValue(getMockSession('authenticated', 1))

const mockPush = jest.fn()
jest.mock('next/dist/client/router', () => ({
  __esModule: true,
  useRouter: () => ({
    query: { mid: 1 },
    push: mockPush,
  }),
}))

afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
const showMountainData = newShowMountainData({
  mountain: {
    id: 1,
    lat: 2,
    lng: 3,
    name: 'foo',
    _count: { routes: 0 },
    routes: [newRoute({ id: 1, name: 'bar', latlngs: [{ lat: 1, lng: 2 }] })],
  },
})

const queryResponse = newShowMountainResponse(
  {
    where: {
      id: 1,
    },
  },
  showMountainData,
)

const deleteMountainWithSessionData = newDeleteMountainWithSessionData({
  deleteMountainWithSession: {
    id: 1,
  },
})

const mutationResponse = newDeleteMountainWithSessionResponse(
  {
    where: {
      id: 1,
    },
    data: {
      userId: 1,
    },
  },
  deleteMountainWithSessionData,
)
const mockedMutation = {
  ...mutationResponse,
  result: jest.fn(() => mutationResponse.result),
}
describe('show mountain', () => {
  it('should show render', async () => {
    await act(() => {
      testMockedRender(<ShowMountainPage data={{ query: showMountainData }} />, [
        queryResponse,
        mockedMutation,
      ])
    })
    await act(() => {
      new Promise((resolve) => setTimeout(resolve, 0))
    })

    expect(screen.getByText('foo')).toBeTruthy()
    expect(screen.getByText('bar')).toBeTruthy()

    await act(() => {
      fireEvent.click(screen.getByTestId('delete-mountain-button'))
    })
    await act(() => {
      new Promise((resolve) => setTimeout(resolve, 0))
    })
    expect(mockedMutation.result).toHaveBeenCalled()
    expect(mockPush).toHaveBeenCalledWith('/mountains')
  })
})

describe('map component should be displayed', () => {
  it('Marker', async () => {
    await act(() => {
      testMockedRender(<ShowMountainPage data={{ query: showMountainData }} />, [
        queryResponse,
        mockedMutation,
      ])
    })
    await act(() => {
      new Promise((resolve) => setTimeout(resolve, 0))
    })

    const marker = screen.getByTestId('mock-marker')
    expect(marker).toBeInTheDocument()
    expect(marker).toHaveAttribute('data-position-lat', '2')
    expect(marker).toHaveAttribute('data-position-lng', '3')
  })
  it('Polyline', async () => {
    await act(() => {
      testMockedRender(<ShowMountainPage data={{ query: showMountainData }} />, [
        queryResponse,
        mockedMutation,
      ])
    })
    await act(() => {
      new Promise((resolve) => setTimeout(resolve, 0))
    })

    const polyline = screen.getByTestId('mock-polyline')
    expect(polyline).toBeInTheDocument()
  })
})
