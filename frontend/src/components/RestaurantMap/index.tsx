import React, { useEffect, useRef } from "react"
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"

interface Props {
  centerLatLng: google.maps.LatLngLiteral
}

const RestaurantMap = ({ centerLatLng }: Props) => {
  const MapRef = useRef(null)
  useEffect(() => {
    MapRef.current = ReactMapboxGl({
      accessToken: "PUBLIC_API_KEY"
    })
  }, [])

  const { lat = 51.5074, lng = 0.1277 } = centerLatLng || {}

  return MapRef.current ? (
    <MapRef.current
      // eslint-disable-next-line
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}
      center={[lng, lat]}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </MapRef.current>
  ) : null
}

export default RestaurantMap
