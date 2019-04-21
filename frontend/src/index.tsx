import React, { Fragment, ReactElement } from "react"
import ReactDOM from "react-dom"

import registerServiceWorker from "./helpers/registerServiceWorker"

interface Props {
  msg: string
}

const Test = ({ msg }: Props): ReactElement => {
  return <Fragment>{msg}</Fragment>
}

ReactDOM.render(<Test msg="hi" />, document.getElementById("boot"))

registerServiceWorker()
