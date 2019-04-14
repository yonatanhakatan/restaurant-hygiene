const express = require("express")
const { ApolloServer } = require("apollo-server-express")

const typeDefs = require("./src/types")
const resolvers = require("./src/resolvers")

const port = 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
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
