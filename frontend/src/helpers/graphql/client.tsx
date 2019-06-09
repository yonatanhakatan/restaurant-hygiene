import ApolloClient from "apollo-boost"

const getUri = () => {
  switch (process.env.ENVIRONMENT) {
    case "production":
      return "tbc"
    default:
      return "http://localhost:4000/graphql"
  }
}

const client = new ApolloClient({
  uri: getUri()
})

export default client
