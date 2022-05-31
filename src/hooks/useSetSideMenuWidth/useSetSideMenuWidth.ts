import { useEffect } from 'react'
import { useAppContext } from '@/src/contexts/AppContext'

export const useSetSideMenuWidth = (width: number) => {
  const { setMenuWidth } = useAppContext()

  useEffect(() => {
    setMenuWidth(width)
  }, [width, setMenuWidth])
}
