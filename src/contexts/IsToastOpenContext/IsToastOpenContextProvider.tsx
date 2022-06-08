import { createContext, ReactElement, useCallback, useContext, useState } from 'react'

export const IsToastOpenContextState = createContext<boolean>(false)

export const useIsToastOpenContextState = () => useContext(IsToastOpenContextState)

export const IsToastOpenContextUpdater = createContext<(value: boolean) => void>(() => {})
export const useIsToastOpenContextUpdater = () => useContext(IsToastOpenContextUpdater)

export const IsToastOpenContextProvider = ({ children }: { children: ReactElement }) => {
  // the value that will be given to the context
  const [center, setIsToastOpen] = useState<boolean>(false)

  const update = useCallback((value: boolean) => {
    setIsToastOpen(value)
  }, [])
  return (
    <IsToastOpenContextState.Provider value={center}>
      <IsToastOpenContextUpdater.Provider value={update}>
        {children}
      </IsToastOpenContextUpdater.Provider>
    </IsToastOpenContextState.Provider>
  )
}
