import React, { PureComponent } from "react"
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete"

import { Input } from "./styled"

interface Props {
  onLatLng: (latLng: google.maps.LatLngLiteral) => void
}

interface State {
  address: string
}

export default class PlacesInput extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      address: ""
    }
  }

  handleChange = (address: string) => {
    this.setState({ address })
  }

  handleSelect = (address: string) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.onLatLng(latLng))
  }

  render() {
    return (
      <PlacesAutocomplete
        searchOptions={{
          componentRestrictions: { country: "gb" }
        }}
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Input
              {...getInputProps({
                placeholder: "Search Places ..."
              })}
            />
            <div>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const style = suggestion.active
                  ? { backgroundColor: "#ff0000", cursor: "pointer" }
                  : { backgroundColor: "#ff00ff", cursor: "pointer" }
                const { key, ...props } = getSuggestionItemProps(suggestion, {
                  style
                })
                return (
                  <div key={key} {...props}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    )
  }
}
