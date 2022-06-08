import { createContext, ReactElement, useCallback, useContext, useState } from 'react'

export const CenterContextState = createContext<google.maps.LatLngLiteral | null>(null)

export const useCenterContextState = () => useContext(CenterContextState)

export const CenterContextUpdater = createContext<(value: google.maps.LatLngLiteral) => void>(
  () => {},
)
export const useCenterContextUpdater = () => useContext(CenterContextUpdater)

export const CenterContextProvider = ({ children }: { children: ReactElement }) => {
  const [center, setCenter] = useState<google.maps.LatLngLiteral | null>(null)

  const update = useCallback((value: google.maps.LatLngLiteral | null) => {
    setCenter(value)
  }, [])
  return (
    <CenterContextState.Provider value={center}>
      <CenterContextUpdater.Provider value={update}>{children}</CenterContextUpdater.Provider>
    </CenterContextState.Provider>
  )
}
