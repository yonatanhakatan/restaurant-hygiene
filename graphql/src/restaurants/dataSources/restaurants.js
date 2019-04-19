import { RESTDataSource } from "apollo-datasource-rest"

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

  async getRestaurantsByLatLng(latitude, longitude, page = 1, limit = 10) {
    const response = await this.get("establishments", {
      latitude,
      longitude,
      pageNumber: page,
      pageSize: limit
    })

    const results = response.establishments

    return Array.isArray(results)
      ? results.map(establishment => this.restaurantReducer(establishment))
      : []
  }
}

export default RestaurantsAPI
