module.exports = `
  type LatLng {
    latitude: String
    longitude: String
  }

  type Restaurant {
    name: String
    address1: String
    address2: String
    address3: String
    address4: String
    postCode: String
    rating: String
    latLng: LatLng
  }
`
