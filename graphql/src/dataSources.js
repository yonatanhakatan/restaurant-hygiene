import RestaurantsDataSource from "./restaurants/dataSources/restaurants"

export default () => ({
  restaurants: new RestaurantsDataSource()
})
