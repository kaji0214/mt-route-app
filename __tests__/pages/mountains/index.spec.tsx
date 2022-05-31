import { act, fireEvent, screen } from '@testing-library/react'
import { testMockedRender } from '@/src/utils/test-util'
import ListMountainsPage from '@/pages/mountains/index'
import { setupServer } from 'msw/node'
import { mock } from 'jest-mock-extended'
import { NextRouter } from 'next/router'
import * as nextRouter from 'next/router'
import { MountainListProps } from '@/src/components/mountain/mountain-list/MountainList'
import { newListMountainsResponse, newMountain } from '@/graphql/generated/client'

const spyUseRouter = jest.spyOn(nextRouter, 'useRouter')
const mockPush = jest.fn()
const mockRouter = mock<NextRouter>()
spyUseRouter.mockReturnValue({ ...mockRouter, query: { mid: '1' }, push: mockPush })

jest.mock('@/src/components/mountain/mountain-list/MountainList', () => {
  const Foo = ({ mountains, loadMoreItems }: MountainListProps) => (
    <div>
      <button onClick={() => loadMoreItems()}>more</button>
      <ul>
        {mountains.map((mountain) => (
          <li key={mountain.id}> {mountain.name}</li>
        ))}
      </ul>
    </div>
  )
  return Foo
})

const server = setupServer()
beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => server.close())

afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
describe('list mountains', () => {
  const response = newListMountainsResponse(
    { perPage: 5, page: 1, where: { name: { contains: '' } } },
    {
      mountainsPagination: {
        data: [newMountain({ id: 111, name: 'foo' }), newMountain({ id: 222, name: 'bar' })],
        meta: { total: 1, lastPage: 1, currentPage: 1, perPage: 1, prev: 1, next: 1 },
      },
    },
  )
  it('should show mountains', async () => {
    await act(() => {
      testMockedRender(<ListMountainsPage />, [response])
    })
    await act(() => {
      new Promise((resolve) => setTimeout(resolve, 0))
    })
    await act(() => {
      fireEvent.click(screen.getByText('more'))
    })
    await act(() => {
      new Promise((resolve) => setTimeout(resolve, 0))
    })
    // expect(screen.getByText('foo')).toBeTruthy()
  })
  it('should link to create form', async () => {
    await act(() => {
      testMockedRender(<ListMountainsPage />, [response])
    })
    await act(() => {
      new Promise((resolve) => setTimeout(resolve, 0))
    })

    fireEvent.click(screen.getByText('Add New Mountain'))
    expect(mockPush).toHaveBeenCalledWith(`/mountains/new`)
  })
})
