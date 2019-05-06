import React, { PureComponent } from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Home from "../Home"

import { GlobalStyle } from "./styled"

export default class App extends PureComponent {
  render() {
    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
        </BrowserRouter>
      </>
    )
  }
}
