import { fireEvent, act, screen } from '@testing-library/react'
import EditMountainPage from '@/pages/mountains/[mid]/edit'
import { testMockedRender } from '@/src/utils/test-util'
import {
  newEditedMountainData,
  newEditedMountainResponse,
  newMountain,
  newUpdateMountainWithSessionResponse,
} from '@/graphql/generated/client'
import * as CenterContextState from '@/src/contexts/CenterContext/CenterContextProvider'

const mockPush = jest.fn()
jest.mock('next/dist/client/router', () => ({
  __esModule: true,
  useRouter: () => ({
    query: { mid: 1 },
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
afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
const values = {
  name: 'bar',
  lat: 222,
  lng: 333,
}
const editedMountainData = newEditedMountainData({
  mountain: newMountain({
    id: 1,
    name: 'foo',
    lat: 200,
    lng: 300,
  }),
})
const queryResponse = newEditedMountainResponse({ where: { id: 1 } }, editedMountainData)
const mutationResponse = newUpdateMountainWithSessionResponse(
  {
    data: {
      name: { set: values.name },
      lat: { set: values.lat },
      lng: { set: values.lng },
      userId: { set: 1 },
    },
    where: { id: 1 },
  },
  {
    updateMountainWithSession: {
      id: 1,
      name: values.name,
      lat: values.lat,
      lng: values.lng,
    },
  },
)

const mockedMutation = {
  ...mutationResponse,
  result: jest.fn(() => mutationResponse.result),
}

const mocks = [queryResponse, mockedMutation]
describe('EditMountainQuery', () => {
  it('should update mountain', async () => {
    await act(() => {
      testMockedRender(<EditMountainPage data={{ query: editedMountainData }} />, mocks, {
        user: { id: 1 },
      })
    })
    await act(() => {
      new Promise((resolve) => setTimeout(resolve, 0))
    })

    expect(screen.getByDisplayValue('foo')).toBeTruthy()
    expect(screen.getByDisplayValue('200')).toBeTruthy()
    expect(screen.getByDisplayValue('300')).toBeTruthy()

    const name = screen.getByTestId('name-input')
    const lat = screen.getByTestId('lat-input')
    const lng = screen.getByTestId('lng-input')

    await act(() => {
      fireEvent.change(name, { target: { value: 'bar' } })
      fireEvent.change(lat, { target: { value: 222 } })
      fireEvent.change(lng, { target: { value: 333 } })
    })

    expect(screen.getByDisplayValue('bar')).toBeInTheDocument()
    expect(screen.getByDisplayValue(222)).toBeInTheDocument()
    expect(screen.getByDisplayValue(333)).toBeInTheDocument()

    await act(() => {
      fireEvent.submit(screen.getByText('Edit Mountain'))
    })

    expect(mockedMutation.result).toHaveBeenCalled()
    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/mountains/[mid]',
      query: {
        mid: 1,
      },
    })
  })
})

describe('Marker', () => {
  it('should show as default', async () => {
    await act(() => {
      testMockedRender(<EditMountainPage data={{ query: editedMountainData }} />, mocks, {
        user: { id: 1 },
      })
    })
    expect(screen.getByTestId('mock-marker')).toHaveAttribute('data-position-lat', '200')
    expect(screen.getByTestId('mock-marker')).toHaveAttribute('data-position-lng', '300')
  })
  it('should show marker when searched', async () => {
    jest
      .spyOn(CenterContextState, 'useCenterContextState')
      .mockImplementation(() => ({ lat: 1, lng: 2 }))
    await act(() => {
      testMockedRender(<EditMountainPage data={{ query: editedMountainData }} />, mocks, {
        user: { id: 1 },
      })
    })
    expect(screen.getByTestId('mock-marker')).toHaveAttribute('data-position-lat', '1')
    expect(screen.getByTestId('mock-marker')).toHaveAttribute('data-position-lng', '2')
  })
})
