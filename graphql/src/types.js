const { mergeTypes } = require("merge-graphql-schemas")
const RatingsTypes = require("./ratings/types")

const types = mergeTypes([RatingsTypes])

module.exports = types
