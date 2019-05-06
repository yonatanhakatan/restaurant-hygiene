import React, { PureComponent } from "react"
import LoadGoogleMapsApi from "load-google-maps-api"

import PlacesInput from "../PlacesInput"

interface Props {}

interface State {
  gmapsInitialised: boolean
  latLng: google.maps.LatLngLiteral | null
}

export default class Home extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      gmapsInitialised: false,
      latLng: null
    }
    LoadGoogleMapsApi({
      libraries: ["places"],
      key: "AIzaSyDPS4DMawKvu72-uQnN2QqAyG7Bfps9KXI"
    }).then(() => {
      this.setState({
        gmapsInitialised: true
      })
    })
  }

  handleInputLatLng = (latLng: google.maps.LatLngLiteral) => {
    this.setState({
      latLng
    })
  }

  render() {
    return (
      <>
        {this.state.gmapsInitialised && (
          <PlacesInput onLatLng={this.handleInputLatLng} />
        )}
        {this.state.latLng &&
          `${this.state.latLng.lat} ${this.state.latLng.lng}`}
      </>
    )
  }
}
