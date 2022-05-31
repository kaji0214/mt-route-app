import { act, fireEvent, screen } from '@testing-library/react'
import { getMockSession, testMockedRender } from '@/src/utils/test-util'
import * as nextAuth from 'next-auth/react'
import {
  newDeleteRouteWithSessionData,
  newDeleteRouteWithSessionResponse,
  newMountain,
  newShowRouteData,
  newShowRouteResponse,
} from '@/graphql/generated/client'
import ShowRoutePage from '@/pages/mountains/[mid]/routes/[rid]'
const spyUseSession = jest.spyOn(nextAuth, 'useSession')
spyUseSession.mockReturnValue(getMockSession('authenticated', 1))

const mockPush = jest.fn()
jest.mock('next/dist/client/router', () => ({
  __esModule: true,
  useRouter: () => ({
    query: { mid: 1, rid: 1 },
    push: mockPush,
  }),
}))

afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
describe('show mountain', () => {
  const showRouteData = newShowRouteData({
    route: {
      id: 1,
      userId: 1,
      name: 'foo',
      mountain: newMountain({ id: 1, name: 'bar' }),
      latlngs: [],
    },
  })

  const queryResponse = newShowRouteResponse(
    {
      where: {
        id: 1,
      },
    },
    showRouteData,
  )

  const mutationResponse = newDeleteRouteWithSessionResponse(
    {
      where: {
        id: 1,
      },
      data: {
        userId: 1,
      },
    },
    newDeleteRouteWithSessionData({
      deleteRouteWithSession: {
        id: 1,
      },
    }),
  )
  const mockedMutation = {
    ...mutationResponse,
    result: jest.fn(() => mutationResponse.result),
  }

  it('should show render', async () => {
    await act(() => {
      testMockedRender(<ShowRoutePage data={{ query: showRouteData }} />, [
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
      fireEvent.click(screen.getByText('Delete'))
    })
    await act(() => {
      new Promise((resolve) => setTimeout(resolve, 0))
    })
    expect(mockedMutation.result).toHaveBeenCalled()
    expect(mockPush).toHaveBeenCalledWith('/mountains/1')
  })
})
