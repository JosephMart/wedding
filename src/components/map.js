import React from "react"
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "30em",
}

const center = {
  lat: 29.42585,
  lng: -98.543517,
}

function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_MAP_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
