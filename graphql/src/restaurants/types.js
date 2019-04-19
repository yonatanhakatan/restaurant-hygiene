import { gql } from "apollo-server-express"
import Restaurant from "./types/Restaurant"

const typeDefs = gql`
  type Query {
    search(
      latitude: Float!
      longitude: Float!
      page: Int
      limit: Int
    ): [Restaurant]
  }
  ${Restaurant}
`

export default typeDefs
