import React, { useEffect, useState } from "react"
import LoadGoogleMapsApi from "load-google-maps-api"
import { withApollo } from "react-apollo"
import { ApolloClient } from "apollo-boost"

import PlacesInput from "../PlacesInput"
import RestaurantMap from "../RestaurantMap"
import searchQuery from "../../graphql/query/search"

interface Props {
  client: ApolloClient<{}>
}

export default withApollo(({ client }: Props) => {
  const [gmapsInitialised, initialiseGmaps] = useState<boolean>(false)
  const [latLng, setLatLng] = useState<google.maps.LatLngLiteral>(null)

  useEffect(() => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY
    if (apiKey) {
      LoadGoogleMapsApi({
        libraries: ["places"],
        key: apiKey
      }).then(() => {
        initialiseGmaps(true)
      })
    }
  }, [])

  const search = (searchLatLng: google.maps.LatLngLiteral) => {
    const { lat, lng } = searchLatLng
    client
      .query({
        query: searchQuery,
        variables: {
          latitude: lat,
          longitude: lng
        }
      })
      .then(data => {
        // @todo
      })
  }

  const handleInputLatLng = (inputLatLng: google.maps.LatLngLiteral) => {
    setLatLng(inputLatLng)
    search(inputLatLng)
  }

  return (
    <>
      {gmapsInitialised && <PlacesInput onLatLng={handleInputLatLng} />}
      <RestaurantMap centerLatLng={latLng} />
    </>
  )
})
