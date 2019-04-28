import React, { PureComponent } from "react"
import LoadGoogleMapsApi from "load-google-maps-api"

interface Props {}

export default class Home extends PureComponent<Props> {
  constructor(props: Props) {
    super(props)
    LoadGoogleMapsApi({
      libraries: ["places"],
      key: "GOOGLE_MAPS_PUBLIC_API_KEY"
    })
  }

  render() {
    return <div>Hello</div>
  }
}
