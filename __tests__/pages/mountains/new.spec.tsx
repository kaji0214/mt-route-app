import { act, fireEvent, screen } from '@testing-library/react'
import { testMockedRender } from '@/src/utils/test-util'
import NewMountainPage from '@/pages/mountains/new'
import {
  newCreateMountainWithSessionData,
  newCreateMountainWithSessionResponse,
} from '@/graphql/generated/client'
import * as CenterContextState from '@/src/contexts/CenterContext/CenterContextProvider'

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
const formValues = {
  name: 'foo',
  lat: 222,
  lng: 333,
}
const values = {
  ...formValues,
  name: 'foo',
  lat: 222,
  lng: 333,
  userId: 1,
  id: 1,
}

const mutationResponse = newCreateMountainWithSessionResponse(
  {
    data: { name: 'foo', lat: 222, lng: 333, userId: 1 },
  },
  newCreateMountainWithSessionData({
    createMountainWithSession: {
      id: values.id,
    },
  }),
)
const mockedMutation = {
  ...mutationResponse,
  result: jest.fn(() => mutationResponse.result),
}
describe('NewMountainPage', () => {
  it('should redirect after create', async () => {
    await act(() => {
      testMockedRender(<NewMountainPage />, [mockedMutation])
    })
    await act(() => {
      new Promise((resolve) => setTimeout(resolve, 0))
    })

    const name = screen.getByTestId('name-input')
    const lat = screen.getByTestId('lat-input')
    const lng = screen.getByTestId('lng-input')

    await act(() => {
      fireEvent.change(name, { target: { value: values.name } })
      fireEvent.change(lat, { target: { value: values.lat } })
      fireEvent.change(lng, { target: { value: values.lng } })
    })
    await act(() => {
      fireEvent.submit(screen.getByText('Create Mountain'))
    })
    expect(mockedMutation.result).toHaveBeenCalledWith()
    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/mountains/[mid]',
      query: {
        mid: values.id,
      },
    })
  })
})
describe('Marker', () => {
  it('should not show as default', async () => {
    await act(() => {
      testMockedRender(<NewMountainPage />, [mockedMutation])
    })
    expect(screen.queryByTestId('mock-marker')).toBeNull()
  })
  it('should show marker when searched', async () => {
    jest
      .spyOn(CenterContextState, 'useCenterContextState')
      .mockImplementation(() => ({ lat: 1, lng: 2 }))
    await act(() => {
      testMockedRender(<NewMountainPage />, [mockedMutation])
    })
    expect(screen.getByTestId('mock-marker')).toHaveAttribute('data-position-lat', '1')
    expect(screen.getByTestId('mock-marker')).toHaveAttribute('data-position-lng', '2')
  })
})
