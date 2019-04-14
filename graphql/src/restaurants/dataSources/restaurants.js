const { RESTDataSource } = require("apollo-datasource-rest")

class RestaurantsAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "http://api.ratings.food.gov.uk/"
  }

  willSendRequest(request) {
    request.headers.set("x-api-version", 2)
  }

  restaurantReducer(establishment) {
    const {
      BusinessName,
      AddressLine1,
      AddressLine2,
      AddressLine3,
      AddressLine4,
      PostCode,
      RatingValue,
      geocode: { latitude, longitude }
    } = establishment
    return {
      name: BusinessName,
      address1: AddressLine1,
      address2: AddressLine2,
      address3: AddressLine3,
      address4: AddressLine4,
      postCode: PostCode,
      rating: RatingValue,
      latLng: {
        latitude,
        longitude
      }
    }
  }

  async getRestaurantsByLatLng(latitude, longitude) {
    const response = await this.get("establishments", {
      latitude,
      longitude,
      pageSize: 10
    })

    const results = response.establishments

    return Array.isArray(results)
      ? results.map(establishment => this.restaurantReducer(establishment))
      : []
  }
}

module.exports = RestaurantsAPI
