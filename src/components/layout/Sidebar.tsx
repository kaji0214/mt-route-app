import React from 'react'
import { motion } from 'framer-motion'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import GoBackButton from '@/src/components/layout/GoBackButton'
import { useMenuWidthContextState } from '@/src/contexts/MenuWidthContext/MenuWidthContextProvider'
type Props = {
  children: JSX.Element
  backUrl?: string
}
const Sidebar = ({ children, backUrl }: Props) => {
  const menuWidth = useMenuWidthContextState()
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${menuWidth}px`,
        height: '100%',
      }}
      animate={{
        width: `${menuWidth}px`,
      }}
    >
      <Toolbar style={{ height: '70px' }}>
        {backUrl ? <GoBackButton url={backUrl} /> : null}
      </Toolbar>
      <Divider />
      {children}
    </motion.div>
  )
}

export default Sidebar
