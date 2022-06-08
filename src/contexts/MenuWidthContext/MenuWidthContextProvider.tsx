import { createContext, ReactElement, useCallback, useContext, useState } from 'react'

export const MenuWidthContextState = createContext<number>(240)
export const useMenuWidthContextState = () => useContext(MenuWidthContextState)

export const MenuWidthContextUpdater = createContext<(value: number) => void>(() => {})
export const useMenuWidthContextUpdater = () => useContext(MenuWidthContextUpdater)

export const MenuWidthContextProvider = ({ children }: { children: ReactElement }) => {
  const [toast, setMenuWidth] = useState<number>(240)

  const update = useCallback((value: number) => {
    setMenuWidth(value)
  }, [])
  return (
    <MenuWidthContextState.Provider value={toast}>
      <MenuWidthContextUpdater.Provider value={update}>{children}</MenuWidthContextUpdater.Provider>
    </MenuWidthContextState.Provider>
  )
}
