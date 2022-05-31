import { EditedRouteQuery, newRoute } from '@/graphql/generated/client'
import { useEffect } from 'react'
import { useGoogleMap } from '@react-google-maps/api'
import { useEditablePolyline } from '@/src/hooks/useEditablePolyline/useEditablePolyline'

type UseEditRouteHookReturnValues = {
  polyline: google.maps.Polyline
  getLatlngs: () => google.maps.LatLngLiteral[]
}
export type UseEditRouteHookProps = {
  query: EditedRouteQuery
}

export const useEditRouteHook = ({
  query,
}: UseEditRouteHookProps): UseEditRouteHookReturnValues => {
  const map = useGoogleMap()
  const { polyline, getLatlngs } = useEditablePolyline({ positions: [] })

  const route = query && query.route ? query!.route : newRoute()
  useEffect(() => {
    if (map !== null) {
      const position = {
        lat: route.mountain.lat,
        lng: route.mountain.lng,
      }
      map.setCenter(position)
      map.setZoom(15)
    }
  }, [map, route])

  useEffect(() => {
    if (polyline !== undefined) {
      polyline.setPath(route.latlngs.map((latlng) => ({ lat: latlng.lat, lng: latlng.lng })))
    }
  }, [route, polyline])

  return {
    polyline,
    getLatlngs,
  }
}
