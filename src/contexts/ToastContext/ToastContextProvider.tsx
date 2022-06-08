import { createContext, ReactElement, useCallback, useContext, useState } from 'react'

export type ToastType = 'success' | 'error' | 'warning' | 'info' | undefined
export const ToastContextState = createContext<ToastType>(undefined)
export const useToastContextState = () => useContext(ToastContextState)

export const ToastContextUpdater = createContext<(value: ToastType) => void>(() => {})
export const useToastContextUpdater = () => useContext(ToastContextUpdater)

export const ToastContextProvider = ({ children }: { children: ReactElement }) => {
  const [toast, setToast] = useState<ToastType>(undefined)

  const update = useCallback((value: ToastType) => {
    setToast(value)
  }, [])
  return (
    <ToastContextState.Provider value={toast}>
      <ToastContextUpdater.Provider value={update}>{children}</ToastContextUpdater.Provider>
    </ToastContextState.Provider>
  )
}
