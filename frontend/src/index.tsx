import React, { Fragment, ReactElement } from "react"
import ReactDOM from "react-dom"

interface Props {
  msg: string
}

const Test = ({ msg }: Props): ReactElement => {
  return <Fragment>{msg}</Fragment>
}

ReactDOM.render(<Test msg="hi" />, document.getElementById("boot"))
