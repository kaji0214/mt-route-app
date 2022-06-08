import React, { memo } from 'react'
import ReactGoogleMap from '@/src//components/map/ReactGoogleMap'
import { motion } from 'framer-motion'
import ResponsiveAppBar from '@/src//components/layout/ResponsiveAppBar'
import { useMenuWidthContextState } from '@/src/contexts/MenuWidthContext/MenuWidthContextProvider'
type Props = {
  children: JSX.Element
}
const Map = ({ children }: Props) => {
  const menuWidth = useMenuWidthContextState()

  return (
    <motion.div
      data-testid={'motion-div'}
      style={{
        position: 'relative',
        left: menuWidth,
        width: `calc(100% - ${menuWidth}px)`,
        height: `calc(100vh - 68.5px)`,
      }}
      animate={{
        left: menuWidth,
      }}
    >
      <ResponsiveAppBar />
      <ReactGoogleMap>{children}</ReactGoogleMap>
    </motion.div>
  )
}
export default memo(Map)
