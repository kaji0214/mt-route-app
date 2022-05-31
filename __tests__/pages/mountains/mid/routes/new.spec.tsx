import { fireEvent, act, screen } from '@testing-library/react'
import { testMockedRender } from '@/src/utils/test-util'
import NewRoutePage from '@/pages/mountains/[mid]/routes/new'
import { mockDeep } from 'jest-mock-extended'
import {
  newCreateRouteWithSessionResponse,
  newNewRouteData,
  newNewRouteResponse,
} from '@/graphql/generated/client'
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
jest.mock(
  'react-window-infinite-loader',
  () =>
    ({ children }: any) =>
      children({ height: 600, width: 600 }),
)

const mockPolyline = mockDeep<google.maps.Polyline>()

jest.mock('@/src/hooks/useEditablePolyline/useEditablePolyline', () => ({
  __esModule: true,
  useEditablePolyline: () => ({
    polyline: mockPolyline,
    getLatlngs: jest.fn().mockReturnValue([{ lat: 1, lng: 1 }]),
  }),
}))

afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
describe('New route', () => {
  const values = {
    name: 'bar',
    time: 222,
    mountainId: 1,
    userId: 1,
    latlngs: [{ lat: 1, lng: 1 }],
  }
  const newRouteData = newNewRouteData({
    mountain: {
      id: 1,
      name: 'foo',
      lat: 2,
      lng: 3,
    },
  })

  const queryResponse = newNewRouteResponse(
    {
      where: {
        id: 1,
      },
    },
    newRouteData,
  )

  const mutationResponse = newCreateRouteWithSessionResponse(
    {
      data: {
        name: values.name,
        time: values.time,
        mountainId: values.mountainId,
        userId: values.userId,
        latlngs: values.latlngs,
      },
    },
    {
      createRouteWithSession: {
        id: 1,
      },
    },
  )
  const mockedMutation = {
    ...mutationResponse,
    result: jest.fn(() => mutationResponse.result),
  }
  const mocks = [queryResponse, mockedMutation]

  it('should create new route', async () => {
    await act(() => {
      testMockedRender(<NewRoutePage data={{ query: newRouteData }} />, mocks, { user: { id: 1 } })
    })
    await act(() => {
      new Promise((resolve) => setTimeout(resolve, 0))
    })

    expect(screen.getByText('foo')).toBeInTheDocument()

    const name = screen.getByLabelText('Name')
    const time = screen.getByLabelText('Time')

    await act(() => {
      fireEvent.change(name, { target: { value: values.name } })
      fireEvent.change(time, { target: { value: values.time } })
    })

    expect(screen.getByDisplayValue(values.name)).toBeInTheDocument()
    expect(screen.getByDisplayValue(values.time)).toBeInTheDocument()

    await act(() => {
      fireEvent.submit(screen.getByText('Create route'))
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
