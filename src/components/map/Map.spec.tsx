import Map from '@/src/components/map/Map'
import { render } from '@testing-library/react'
afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})

jest.mock('@/src/components/layout/ResponsiveAppBar', () => ({
  __esModule: true,
  default: () => <div>ResponsiveAppBar</div>,
}))
jest.mock('@/src/components/map/ReactGoogleMap', () => ({
  __esModule: true,
  default: ({ children }: any) => <div>{children}</div>,
}))
describe('Map', () => {
  it('when loaded', async () => {
    const { getByText, debug } = render(
      <Map>
        <div>foo</div>
      </Map>,
    )
    debug()
    expect(getByText('foo')).toBeTruthy()
  })
})
