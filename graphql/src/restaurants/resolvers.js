const resolvers = {
  Query: {
    search: (_, { latitude, longitude, page, limit }, { dataSources }) =>
      dataSources.restaurants.getRestaurantsByLatLng(
        latitude,
        longitude,
        page,
        limit
      )
  }
}

export default resolvers
