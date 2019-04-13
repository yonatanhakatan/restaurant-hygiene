const express = require("express")
const { ApolloServer, gql } = require("apollo-server-express")

const port = 4000

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => "yo"
  }
}

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
