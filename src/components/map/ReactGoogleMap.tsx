import React, { CSSProperties, memo } from 'react'
import { GoogleMap } from '@react-google-maps/api'
type Position = any

const style: CSSProperties = {
  width: '100%',
  height: '100%',
}

type IpInfo = {
  asn: string
  city: string
  continent_code: string
  country: string
  country_area: number
  country_calling_code: 'string'
  country_capital: string
  country_code: string
  country_code_iso3: string
  country_name: string
  country_population: number
  country_tld: string
  currency: string
  currency_name: string
  in_eu: boolean
  ip: string
  languages: string
  latitude: number
  longitude: number
  org: string
  postal: string
  region: string
  region_code: string
  timezone: string
  utc_offset: string
  version: string
}
type Props = {
  children: JSX.Element
}
const ReactGoogleMap = ({ children }: Props) => (
  <GoogleMap
    mapContainerStyle={style}
    center={{ lat: 35.625470121986915, lng: 139.24374986450198 }}
    zoom={10}
  >
    {children}
  </GoogleMap>
)

export default memo(ReactGoogleMap)
