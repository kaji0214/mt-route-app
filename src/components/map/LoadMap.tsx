import React, { memo } from 'react'
import Map from './Map'
import { useJsApiLoader } from '@react-google-maps/api'
import { Libraries } from '@googlemaps/js-api-loader'

type Props = {
  children: JSX.Element
}
const libraries: Libraries = ['places']
const LoadMap = ({ children }: Props) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    libraries,
  })
  return isLoaded ? <Map>{children}</Map> : <div>loading</div>
}

export default memo(LoadMap)
