import {
  AppContext,
  AppContextValues,
  defaultActive,
  defaultCenter,
  defaultIsToastOpen,
  defaultMenuWidth,
  defaultToast,
  ToastType,
} from './AppContext'
import { useState } from 'react'

type Props = {
  children: JSX.Element
}
const AppProvider = ({ children }: Props) => {
  const [menuWidth, setMenuWidth] = useState<number>(defaultMenuWidth)
  const [active, setActive] = useState<number>(defaultActive)
  const [center, setCenter] = useState<google.maps.LatLngLiteral | undefined>(defaultCenter)
  const [toast, setToast] = useState<ToastType>(defaultToast)
  const [isToastOpen, setIsToastOpen] = useState<boolean>(defaultIsToastOpen)

  const value: AppContextValues = {
    isToastOpen,
    setIsToastOpen,
    toast,
    setToast,
    menuWidth,
    setMenuWidth,
    active,
    setActive,
    center,
    setCenter,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
