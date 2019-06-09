import React, { PureComponent } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { ApolloProvider } from "react-apollo"

import Home from "../Home"
import client from "../../helpers/graphql/client"

import { GlobalStyle } from "./styled"

export default class App extends PureComponent {
  render() {
    return (
      <>
        <GlobalStyle />
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Route exact path="/" component={Home} />
          </BrowserRouter>
        </ApolloProvider>
      </>
    )
  }
}
