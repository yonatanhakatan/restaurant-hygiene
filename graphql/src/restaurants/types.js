import { gql } from "apollo-server-express"
import Restaurant from "./types/Restaurant"

const typeDefs = gql`
  type Query {
    search(latitude: Float!, longitude: Float!): [Restaurant]
  }
  ${Restaurant}
`

export default typeDefs
