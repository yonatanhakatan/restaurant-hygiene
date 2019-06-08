import React, { useEffect, useState } from "react"
import LoadGoogleMapsApi from "load-google-maps-api"

import PlacesInput from "../PlacesInput"

export default () => {
  const [gmapsInitialised, initialiseGmaps] = useState<boolean>(false)
  const [latLng, setLatLng] = useState<google.maps.LatLngLiteral>(null)

  useEffect(() => {
    LoadGoogleMapsApi({
      libraries: ["places"],
      key: "PUBLIC_API_KEY"
    }).then(() => {
      initialiseGmaps(true)
    })
  }, [])

  const handleInputLatLng = (inputLatLng: google.maps.LatLngLiteral) => {
    setLatLng(inputLatLng)
  }

  return (
    <>
      {gmapsInitialised && <PlacesInput onLatLng={handleInputLatLng} />}
      {latLng && `${latLng.lat} ${latLng.lng}`}
    </>
  )
}
