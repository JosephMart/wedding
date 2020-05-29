import React, { useReducer } from "react"
import {
  GoogleMap,
  Marker,
  LoadScript,
  InfoWindow,
} from "@react-google-maps/api"
import BeatLoader from "react-spinners/BeatLoader"

const containerStyle = {
  width: "100%",
  height: "100%",
}

const kendallLoc = {
  lat: 29.78995,
  lng: -98.601522,
}

const churchLoc = {
  lat: 29.42552,
  lng: -98.54315,
}

const center = {
  lat: 29.58052,
  lng: -98.5599,
}

const markerReducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case "kendall":
      return { ...state, kendall: !state.kendall }

    case "church":
      return { ...state, church: !state.church }

    case "hotel":
      return { ...state, church: !state.hotel }

    default:
      return state
  }
}

function Map() {
  const [markerState, mDispatch] = useReducer(markerReducer, {
    kendall: false,
    church: false,
    hotel: false,
  })

  const kenndallClick = e => mDispatch({ type: "kendall" })
  const churchClick = e => mDispatch({ type: "church" })

  return (
    <LoadScript
      googleMapsApiKey={process.env.GATSBY_MAP_KEY}
      loadingElement={<BeatLoader />}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9}>
        <Marker
          position={churchLoc}
          animation={2}
          onClick={churchClick}
          visible={!markerState.church}
        />
        <Marker
          position={kendallLoc}
          animation={2}
          onClick={kenndallClick}
          visible={!markerState.kendall}
        />
        {markerState.church && (
          <InfoWindow position={churchLoc} onCloseClick={churchClick}>
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
        )}

        {markerState.kendall && (
          <InfoWindow position={kendallLoc} onCloseClick={kenndallClick}>
            <div className="infoWindow">
              <b>Kendall Plantation</b>
              <p>20 Guthrie Rd</p>
              <p>Boerne, TX 78006</p>
              <a
                href="https://maps.google.com/maps?ll=29.78995,-98.601522&z=18&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=11158093104063480470"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>View on Google Maps</p>
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
