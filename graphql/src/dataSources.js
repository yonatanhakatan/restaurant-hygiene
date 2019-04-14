const RestaurantsDateSource = require("./restaurants/dataSources/restaurants")

module.exports = () => ({
  restaurants: new RestaurantsDateSource()
})
