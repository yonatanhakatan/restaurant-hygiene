const { mergeResolvers } = require("merge-graphql-schemas")
const RestaurantsResolvers = require("./restaurants/resolvers")

const resolvers = mergeResolvers([RestaurantsResolvers])

module.exports = resolvers
