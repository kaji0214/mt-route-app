import { useEffect } from 'react'
import { useMenuWidthContextUpdater } from '@/src/contexts/MenuWidthContext/MenuWidthContextProvider'

export const useSetSideMenuWidth = (width: number) => {
  const setMenuWidth = useMenuWidthContextUpdater()

  useEffect(() => {
    setMenuWidth(width)
  }, [width, setMenuWidth])
}
