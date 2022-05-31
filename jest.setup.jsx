const div = document.createElement('div')
const mockMap = new window.google.maps.Map(div)

/**
 * mock for useRouter
 */

jest.mock('next/dist/client/router', () => {
  return {
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
      push: jest.fn(() => Promise.resolve(true)),
      prefetch: jest.fn(() => Promise.resolve(true)),
      replace: jest.fn(() => Promise.resolve(true)),
    }),
  }
})

jest.mock('@react-google-maps/api', () => {
  const mockActual = jest.requireActual('@react-google-maps/api')
  return {
    ...mockActual,
    useJsApiLoader: () => ({
      isLoaded: true,
      loadError: null,
    }),
    GoogleMap: ({ children }) => <div>{children}</div>,
    Autocomplete: ({ children }) => <div>{children}</div>,
    Marker: ({ onMouseOut, onMouseOver, onDblClick, ...props }) => (
      <div
        data-position-lat={props.position.lat}
        data-position-lng={props.position.lng}
        data-opacity={props.opacity}
        data-testid={'mock-marker'}
      >
        <div data-testid={'mock-marker-onDblClick'} onClick={(e) => onDblClick(e)}>
          onDblClick
        </div>
        <div data-testid={'mock-marker-onMouseOver'} onClick={(e) => onMouseOver()}>
          onMouseOver
        </div>
        <div data-testid={'mock-marker-onMouseOut'} onClick={(e) => onMouseOut()}>
          onMouseOut
        </div>
      </div>
    ),
    Polyline: ({ onMouseOut, onMouseOver, onDblClick, ...props }) => (
      <div {...props} data-testid={'mock-polyline'} data-path={props.path}>
        <div data-testid={'mock-polyline-onDblClick'} onClick={(e) => onDblClick(e)}>
          onDblClick
        </div>
        <div data-testid={'mock-polyline-onMouseOver'} onClick={(e) => onMouseOver()}>
          onMouseOver
        </div>
        <div data-testid={'mock-polyline-onMouseOut'} onClick={(e) => onMouseOut()}>
          onMouseOut
        </div>
      </div>
    ),
    useGoogleMap: jest.fn().mockImplementation(() => mockMap),
  }
})
