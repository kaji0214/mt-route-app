import { createContext, ReactElement, useCallback, useContext, useState } from 'react'

export const ActiveContextState = createContext<number>(-1)
export const useActiveContextState = () => useContext(ActiveContextState)

export const ActiveContextUpdater = createContext<(value: number) => void>(() => {})
export const useActiveContextUpdater = (): ((value: number) => void) =>
  useContext(ActiveContextUpdater)

export const ActiveContextProvider = ({ children }: { children: ReactElement }) => {
  const [active, setActive] = useState<number>(0)

  const update = useCallback((value: number) => {
    setActive(value)
  }, [])
  return (
    <ActiveContextState.Provider value={active}>
      <ActiveContextUpdater.Provider value={update}>{children}</ActiveContextUpdater.Provider>
    </ActiveContextState.Provider>
  )
}
