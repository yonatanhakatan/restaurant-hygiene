import { gql } from "apollo-boost"

export default gql`
  query Search($latitude: Float!, $longitude: Float!, $page: Int, $limit: Int) {
    search(
      latitude: $latitude
      longitude: $longitude
      page: $page
      limit: $limit
    ) {
      name
      address1
      address2
      address3
      address4
      postCode
      rating
      latLng {
        latitude
        longitude
      }
    }
  }
`
