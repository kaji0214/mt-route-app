import { testMockedRender } from '@/src/utils/test-util'
import Auth from '@/src/components/auth/Auth'

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
describe('Auth', () => {
  it('should show children when session exists', async () => {
    const { getByText } = testMockedRender(
      <Auth>
        <div>foo</div>
      </Auth>,
      [],
    )
    expect(getByText('foo')).toBeTruthy()
  })
  it('should redirect when session not found', async () => {
    testMockedRender(
      <Auth>
        <div>foo</div>
      </Auth>,
      [],
      null,
    )
    expect(mockPush).toHaveBeenCalled()
  })
})
