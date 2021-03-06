import { RouteDetailProps } from '@/src/components/route/route-detail/RouteDetail'
import { useCallback, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useGoogleMap } from '@react-google-maps/api'
import { newRoute, ShowRouteQuery, ShowRouteQueryFragment } from '@/graphql/generated/client'

type UseShowRouteHookReturnValues = Omit<RouteDetailProps, 'data' | 'onClickDeleteRoute'> & {
  route: ShowRouteQueryFragment
}
export type UseShowRouteHookProps = {
  query: ShowRouteQuery
}

export const useShowRouteHook = ({
  query,
}: UseShowRouteHookProps): UseShowRouteHookReturnValues => {
  const route = query && query.route ? query.route : newRoute()
  const { id, mountain, userId, latlngs } = route
  const router = useRouter()
  const { data: session } = useSession()
  const map = useGoogleMap()

  const onClickEditRoute = useCallback(() => {
    router.push(`/mountains/${mountain.id}/routes/${id}/edit`)
  }, [id, router, mountain])

  useEffect(() => {
    if (map !== null) {
      const latLngBounds = new google.maps.LatLngBounds()
      latlngs.forEach((position) => {
        latLngBounds.extend({
          lat: position.lat,
          lng: position.lng,
        })
      })

      map.fitBounds(latLngBounds, 10)
      map.setCenter({ lat: route.mountain.lat, lng: route.mountain.lng })
      map.setZoom(14)
    }
  }, [route, map, latlngs])

  const canEdit = useMemo(() => (session ? session.user.id === userId : false), [session, userId])
  const canDelete = true //todo
  return {
    route,
    canEdit,
    canDelete,
    onClickEditRoute,
  }
}
