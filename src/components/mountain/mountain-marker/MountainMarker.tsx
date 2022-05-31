import * as React from 'react'
import { memo } from 'react'
import { Marker } from '@react-google-maps/api'
import { MountainMarkerFragment } from '@/graphql/generated/client'
import { useAppContext } from '@/src/contexts/AppContext'

export type MountainMarkerProps = {
  active?: boolean
  data: MountainMarkerFragment
}
const MountainMarker = ({ data, active = false }: MountainMarkerProps) => {
  const { id, lat, lng } = data
  const { setActive } = useAppContext()

  return (
    <Marker
      data-testid={`marker-${id}`}
      onMouseOut={() => setActive(-1)}
      onMouseOver={() => setActive(id)}
      position={{ lat, lng }}
      opacity={active ? 0.6 : 1.0}
    />
  )
}

export default memo(MountainMarker)
