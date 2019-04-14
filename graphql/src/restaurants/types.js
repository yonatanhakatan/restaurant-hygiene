const { gql } = require("apollo-server-express")
const Restaurant = require("./types/Restaurant")

const typeDefs = gql`
  type Query {
    search(latitude: Float!, longitude: Float!): [Restaurant]
  }
  ${Restaurant}
`

module.exports = typeDefs
