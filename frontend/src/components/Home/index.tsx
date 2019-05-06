import React, { PureComponent } from "react"
import LoadGoogleMapsApi from "load-google-maps-api"

interface Props {}

export default class Home extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)
    LoadGoogleMapsApi({
      libraries: ["places"],
      key: "AIzaSyDPS4DMawKvu72-uQnN2QqAyG7Bfps9KXI"
    })
  }

  render() {
    return <div>Hello</div>
  }
}
