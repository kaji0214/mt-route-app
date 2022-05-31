import { useEditablePolyline } from '@/src/hooks/useEditablePolyline/useEditablePolyline'
import { useEffect } from 'react'
import { useGoogleMap } from '@react-google-maps/api'
import { newMountain, NewRouteQuery, NewRouteQueryFragment } from '@/graphql/generated/client'

type UseNewRouteHookReturnValues = {
  polyline: google.maps.Polyline
  getLatlngs: () => google.maps.LatLngLiteral[]
  mountain: NewRouteQueryFragment
}
export type UseNewRouteHookProps = {
  query: NewRouteQuery
}
export const useNewRouteHook = ({ query }: UseNewRouteHookProps): UseNewRouteHookReturnValues => {
  const map = useGoogleMap()
  const mountain = query && query.mountain ? query.mountain : newMountain()
  const { lat, lng } = mountain

  const positions: google.maps.LatLngLiteral[] = [
    { lat, lng },
    { lat: lat - 0.01, lng: lng - 0.01 },
  ]
  const { polyline, getLatlngs } = useEditablePolyline({ positions })

  useEffect(() => {
    if (map !== null) {
      const position = { lat, lng }
      map.setCenter(position)
      map.setZoom(15)
    }
  }, [map, lat, lng])
  return {
    polyline,
    getLatlngs,
    mountain,
  }
}
