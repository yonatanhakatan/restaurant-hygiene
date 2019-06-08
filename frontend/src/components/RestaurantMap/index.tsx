import React, { useEffect, useRef } from "react"
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"

const ResturantMap = () => {
  const MapRef = useRef(null)
  useEffect(() => {
    MapRef.current = ReactMapboxGl({
      accessToken:
        "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A"
    })
  }, [])

  return MapRef.current ? (
    <MapRef.current
      // eslint-disable-next-line
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </MapRef.current>
  ) : null
}

export default ResturantMap
