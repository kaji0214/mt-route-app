import React, { useContext } from 'react'
export type ToastType = 'success' | 'error' | 'warning' | 'info' | undefined
export const defaultIsToastOpen = false
export const defaultToast = undefined
export const defaultMenuWidth = 240
export const defaultActive = -1
export const defaultCenter = undefined
export interface AppContextValues {
  isToastOpen: boolean
  setIsToastOpen: (isToastOpen: boolean) => void
  toast: ToastType
  setToast: (toast: ToastType) => void
  menuWidth: number
  setMenuWidth: (menuWidth: number) => void
  active: number
  setActive: (index: number) => void
  center: google.maps.LatLngLiteral | undefined
  setCenter: (center: google.maps.LatLngLiteral) => void
}

export const appContextValues: AppContextValues = {
  isToastOpen: defaultIsToastOpen,
  setIsToastOpen: () => {},
  toast: defaultToast,
  setToast: () => {},
  menuWidth: defaultMenuWidth,
  setMenuWidth: () => {},
  active: defaultActive,
  setActive: () => {},
  center: defaultCenter,
  setCenter: () => {},
}

export const AppContext = React.createContext<AppContextValues>(appContextValues)

export const useAppContext = () => useContext(AppContext) // the custom hook

export const AppConsumer = AppContext.Consumer
export const AppProvider = AppContext.Provider
