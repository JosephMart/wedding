import React from "react"
import {
  GoogleMap,
  Marker,
  LoadScript,
  InfoWindow,
} from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "100%",
}

const center = {
  lat: 29.42552,
  lng: -98.54315,
}

function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_MAP_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <InfoWindow position={center}>
          <div className="infoWindow">
            <b>Sacred Heart Chapel</b>
            <p>Pvt Rd</p>
            <p>San Antonio, TX 78237</p>
            <a
              href="https://maps.google.com/maps?ll=29.426978,-98.54315&z=17&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=4826326906391070726"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>View on Google Maps</p>
            </a>
          </div>
        </InfoWindow>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
