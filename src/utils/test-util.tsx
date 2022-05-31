import React from 'react'

import { render } from '@testing-library/react'
import { AppContext, appContextValues, AppContextValues } from '@/src/contexts/AppContext'
import { GoogleMap } from '@react-google-maps/api'
import { SessionProvider } from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'
import client from '@/graphql/client'
import { GraphQLRequest } from 'msw/lib/types/handlers/GraphQLHandler'
import { GraphQLHandler } from 'msw'
import { Session } from 'next-auth'
import { MockedProvider } from '@apollo/client/testing'

import { server } from '../../__tests__/mocks/server'
type TestRenderProps = {
  session: Session
  context: AppContextValues
}
const defaultSession: Session = {
  user: {
    id: 1,
    email: 'email',
    name: 'name',
    image: 'image',
  },
  expires: 'expires',
}

export const testMswRenderer =
  (
    children: React.ReactNode,
    { session, context }: TestRenderProps = { session: defaultSession, context: appContextValues },
  ) =>
  (responseOverride?: GraphQLHandler<GraphQLRequest<never>>) => {
    if (responseOverride) {
      server.use(responseOverride)
    }
    render(
      <SessionProvider session={session}>
        <ApolloProvider client={client}>
          <AppContext.Provider value={context}>
            <GoogleMap>{children}</GoogleMap>
          </AppContext.Provider>
        </ApolloProvider>
      </SessionProvider>,
    )
  }
export const testMockedRender = (
  ui: React.ReactNode,
  mocks: any[] = [],
  session: any = defaultSession,
  contextValues: AppContextValues = appContextValues,
) => {
  return render(
    <SessionProvider session={session}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <AppContext.Provider value={contextValues}>
          <GoogleMap>{ui}</GoogleMap>
        </AppContext.Provider>
      </MockedProvider>
    </SessionProvider>,
  )
}

const authenticatedSession: { data: Session; status: 'authenticated' } = {
  data: {
    user: {
      id: 1,
      email: 'email',
      name: 'name',
      image: 'image',
    },
    expires: 'expires',
  },
  status: 'authenticated',
}
const loadingSession: { data: null; status: 'loading' } = {
  data: null,
  status: 'loading',
}

const getMockSession = (type: 'authenticated' | 'loading' = 'authenticated', id: number) => {
  if (type === 'loading') {
    return loadingSession
  }

  const user = { ...authenticatedSession.data.user, id }
  const data = { ...authenticatedSession.data, user }
  return { ...authenticatedSession, data }
}

export { getMockSession }

/**
 * useRouter mock
 */
import * as router from 'next/router'
import { mock, mockDeep } from 'jest-mock-extended'
import { NextRouter } from 'next/router'

const mockNextRouter = mock<NextRouter>()

const getMockUseRouter = () => {
  const mockUseRouter = jest.spyOn(router, 'useRouter')
  mockUseRouter.mockReturnValue(mockNextRouter)
  return mockUseRouter
}
export { getMockUseRouter, mockNextRouter }

/**
 * useSession mock
 */
import * as session from 'next-auth/react'

const getMockUseSession = () => {
  const mock = jest.spyOn(session, 'useSession')
  mock.mockReturnValue(getMockSession('authenticated', 1))
  return mock
}

export { getMockUseSession }

import * as reactGoogleMap from '@react-google-maps/api'

const mockMap = mockDeep<google.maps.Map>()
const getMockUseGoogleMap = () => {
  const mock = jest.spyOn(reactGoogleMap, 'useGoogleMap')
  mock.mockReturnValue(mockMap)
  return mock
}

export { getMockUseGoogleMap, mockMap }

// @ts-ignore
export const mockMarker = ({ onMouseOut, onMouseOver, onDblClick, ...props }) => (
  <div {...props}>
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
)

// @ts-ignore
export const mockPolyline = ({ onMouseOut, onMouseOver, onDblClick, ...props }) => (
  <div {...props}>
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
)
