import React, { PureComponent } from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Home from "../Home"

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    )
  }
}
