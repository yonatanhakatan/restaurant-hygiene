const { mergeTypes } = require("merge-graphql-schemas")
const RestaurantsTypes = require("./restaurants/types")

const types = mergeTypes([RestaurantsTypes])

module.exports = types
