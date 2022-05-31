import * as React from 'react'
import { memo, useEffect, useState } from 'react'
import { Polyline } from '@react-google-maps/api'
import { useAppContext } from '@/src/contexts/AppContext'
import { RoutePolylineFragment } from '@/graphql/generated/client'

const options = {
  fillColor: 'blue',
  fillOpacity: 0.35,
  clickable: true,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: [],
  zIndex: 1,
  strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 2,
}

export type RoutePolylineProps = {
  active?: boolean
  data: RoutePolylineFragment
}
const RoutePolyline = ({ active = false, data }: RoutePolylineProps) => {
  const { id, latlngs } = data
  const positions: google.maps.LatLngLiteral[] = latlngs.map(({ lat, lng }) => ({ lat, lng }))
  const { setActive } = useAppContext()

  const [polyline, setPolyline] = useState<google.maps.Polyline | null>(null)

  useEffect(() => {
    return () => {
      if (polyline) polyline.setMap(null)
    }
  }, [polyline])

  return (
    <Polyline
      data-testid={`route-polyline-${id}`}
      path={positions}
      onLoad={(polyline) => setPolyline(polyline)}
      onMouseOut={() => setActive(-1)}
      onMouseOver={() => setActive(id)}
      options={{
        ...options,
        strokeColor: active ? 'blue' : '#FF0000',
        path: positions,
      }}
    />
  )
}

export default memo(RoutePolyline)
