import { newMountain, ShowMountainFragment, ShowMountainQuery } from '@/graphql/generated/client'
import { useRouter } from 'next/router'
import { MountainDetailProps } from '@/src/components/mountain/mountain-detail/MountainDetail'
import { useCallback, useEffect, useMemo } from 'react'
import { useCookies } from 'react-cookie'
import { useSession } from 'next-auth/react'
import { useGoogleMap } from '@react-google-maps/api'

type UseShowMountainHookReturnValues = Omit<
  MountainDetailProps,
  'data' | 'onClickDeleteMountain'
> & {
  mountain: ShowMountainFragment
}
type UseShowMountainHookProps = {
  query: ShowMountainQuery
}
export const useShowMountainHook = ({
  query,
}: UseShowMountainHookProps): UseShowMountainHookReturnValues => {
  const [, setCookie] = useCookies(['center_lat', 'center_lng'])
  const { data: session } = useSession()
  const map = useGoogleMap()
  const mountain = query && query.mountain ? query.mountain : newMountain()

  const { id, _count, userId } = mountain
  const router = useRouter()

  const onClickAddRoute = useCallback(() => {
    router.push(`/mountains/${id}/routes/new`)
  }, [id, router])

  const onClickEditMountain = useCallback(() => {
    router.push(`/mountains/${id}/edit`)
  }, [id, router])

  const canEdit = useMemo(() => (session ? session.user.id === userId : false), [session, userId])

  const canDelete = useMemo(() => (session ? session.user.id === userId : false), [session, userId])

  useEffect(() => {
    if (map !== null) {
      map.setCenter({
        lat: mountain.lat,
        lng: mountain.lng,
      })
      map.setZoom(13)
      setCookie('center_lat', mountain.lat, { path: '/' })
      setCookie('center_lng', mountain.lng, { path: '/' })
    }
  }, [map, mountain, setCookie])
  return {
    mountain,
    canEdit,
    canDelete,
    onClickAddRoute,
    onClickEditMountain,
  }
}
