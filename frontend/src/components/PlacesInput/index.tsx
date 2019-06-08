import React, { useState } from "react"
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete"

import { Input, Item } from "./styled"

interface Props {
  onLatLng: (latLng: google.maps.LatLngLiteral) => void
}

export default ({ onLatLng }: Props) => {
  const [address, setAddress] = useState<string>("")

  const handleChange = (placesAddress: string) => {
    setAddress(placesAddress)
  }

  const handleSelect = (placesAddress: string) => {
    geocodeByAddress(placesAddress)
      .then(results => getLatLng(results[0]))
      .then(latLng => onLatLng(latLng))
  }

  return (
    <PlacesAutocomplete
      searchOptions={{
        componentRestrictions: { country: "gb" }
      }}
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
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
              const { key, ...props } = getSuggestionItemProps(suggestion)
              return (
                <Item key={key} {...props}>
                  {suggestion.description}
                </Item>
              )
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  )
}
