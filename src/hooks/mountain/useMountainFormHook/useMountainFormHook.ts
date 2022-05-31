import { useState } from 'react'
import { useGoogleMap } from '@react-google-maps/api'

type FormType = {
  name: string
  lat: number
  lng: number
}

export type UseMountainFormHookReturnValues = {
  values: FormType | undefined
  onLoad: (autoComplete: google.maps.places.Autocomplete) => void
  onPlaceChanged: () => FormType | undefined
  autoComplete: google.maps.places.Autocomplete | undefined
}

export const useMountainFormHook = (): UseMountainFormHookReturnValues => {
  const map = useGoogleMap()

  const [values, setValues] = useState<FormType | undefined>(undefined)

  const [autoComplete, setAutoComplete] = useState<google.maps.places.Autocomplete | undefined>(
    undefined,
  )
  const onLoad = (autoComplete: google.maps.places.Autocomplete) => {
    setAutoComplete(autoComplete)
  }
  const onPlaceChanged = (): { name: string; lat: number; lng: number } | undefined => {
    const placeResult = autoComplete ? autoComplete.getPlace() : undefined
    if (!placeResult) {
      return undefined
    }
    const placeResultLocation: google.maps.LatLngLiteral = {
      lat: placeResult!.geometry!.location!.lat(),
      lng: placeResult!.geometry!.location!.lng(),
    }
    if (map) {
      map.setCenter(placeResultLocation)
      map.setZoom(14)
    }
    const newValues = { ...placeResultLocation, name: placeResult!.name! }
    setValues(newValues)
    return newValues
  }

  return { values, onLoad, onPlaceChanged, autoComplete }
}
