import express from "express"

import { ApolloServer } from "apollo-server-express"

import typeDefs from "./types"
import resolvers from "./resolvers"
import dataSources from "./dataSources"

const port = 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  playground: {
    settings: {
      "editor.theme": "light"
    }
  }
})

const app = express()
server.applyMiddleware({ app, path: "/graphql" })

app.listen({ port }, () => {
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
})
