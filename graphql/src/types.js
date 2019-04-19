import { mergeTypes } from "merge-graphql-schemas"
import RestaurantsTypes from "./restaurants/types"

export default mergeTypes([RestaurantsTypes])
