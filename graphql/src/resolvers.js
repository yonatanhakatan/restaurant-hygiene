import { mergeResolvers } from "merge-graphql-schemas"
import RestaurantsResolvers from "./restaurants/resolvers"

export default mergeResolvers([RestaurantsResolvers])
