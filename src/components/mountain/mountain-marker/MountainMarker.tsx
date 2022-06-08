import * as React from 'react'
import { memo } from 'react'
import { Marker } from '@react-google-maps/api'
import { MountainMarkerFragment } from '@/graphql/generated/client'
import { useActiveContextUpdater } from '@/src/contexts/ActiveContext/ActiveContextProvider'

export type MountainMarkerProps = {
  active?: boolean
  data: MountainMarkerFragment
}
const MountainMarker = ({ data, active = false }: MountainMarkerProps) => {
  const { id, lat, lng } = data
  const setActive = useActiveContextUpdater()

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
