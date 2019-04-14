const resolvers = {
  Query: {
    search: (_, { latitude, longitude }, { dataSources }) =>
      dataSources.restaurants.getRestaurantsByLatLng(latitude, longitude)
  }
}

module.exports = resolvers
