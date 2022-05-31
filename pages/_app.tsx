import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import LoadMap from '@/src/components/map/LoadMap'
import AppProvider from '../src/contexts/AppProvider'
import '../styles/style.css'
import Auth from '@/src/components/auth/Auth'
import { SessionProvider } from 'next-auth/react'
import CustomizedSnackbars from '@/src/components/layout/CustomizedSnackbars'
import client from '@/graphql/client'

export type DefaultPageProps = {
  auth?: boolean
}
console.log('process.env.NEXT_PUBLIC_FOO', process.env.NEXT_PUBLIC_FOO)
console.log('process.env.NEXT_PUBLIC_BAR', process.env.NEXT_PUBLIC_BAR)

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<DefaultPageProps>) {
  const { defaultProps } = Component
  const auth = defaultProps ? defaultProps.auth : false

  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <SessionProvider session={session}>
          <LoadMap>
            <>
              {auth ? (
                <Auth>
                  <Component {...pageProps} />
                </Auth>
              ) : (
                <Component {...pageProps} />
              )}
              <CustomizedSnackbars />
            </>
          </LoadMap>
        </SessionProvider>
      </AppProvider>
    </ApolloProvider>
  )
}

export default MyApp
