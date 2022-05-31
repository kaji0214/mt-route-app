import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'

const Auth = ({ children }: { children: JSX.Element }) => {
  const { data: session, status } = useSession()

  const router = useRouter()

  useEffect(() => {
    if (!session && status !== 'loading') {
      router.push(`/api/auth/signin?callbackUrl=${encodeURI(router.route)}`)
    }
  }, [session, router, status])

  return <>{children}</>
}

export default Auth
