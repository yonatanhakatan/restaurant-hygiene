const { mergeResolvers } = require("merge-graphql-schemas")
const RatingsResolvers = require("./ratings/resolvers")

const resolvers = mergeResolvers([RatingsResolvers])

module.exports = resolvers
