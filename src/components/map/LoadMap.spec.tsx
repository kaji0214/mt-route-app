import LoadMap from '@/src/components/map/LoadMap'
import * as googlemaps from '@react-google-maps/api'
import { render } from '@testing-library/react'
// afterAll(() => {
//   jest.clearAllMocks()
//   jest.resetAllMocks()
// })
jest.mock(
  '@/src/components/map/Map',
  () =>
    ({ children }: any) =>
      children,
)
describe('LoadMap', () => {
  it('when loaded', async () => {
    jest
      .spyOn(googlemaps, 'useJsApiLoader')
      .mockReturnValue({ isLoaded: false, loadError: undefined })
    const { getByText } = render(
      <LoadMap>
        <div>foo</div>
      </LoadMap>,
    )
    expect(getByText('foo')).toBeTruthy()
  })
  it('when loading', async () => {
    jest
      .spyOn(googlemaps, 'useJsApiLoader')
      .mockReturnValue({ isLoaded: false, loadError: undefined })
    const { getByText } = render(
      <LoadMap>
        <div>foo</div>
      </LoadMap>,
    )
    expect(getByText('foo')).toBeTruthy()
    // expect(getByText('loading')).toBeTruthy() //todo
  })
})
