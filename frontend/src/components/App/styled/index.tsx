import { createGlobalStyle } from "styled-components"

import titilliumWebTtfFont from "../../../fonts/TitilliumWeb-Regular.ttf"
import titilliumWebWoffFont from "../../../fonts/TitilliumWeb-Regular.woff"
import titilliumWebBoldTtfFont from "../../../fonts/TitilliumWeb-Bold.ttf"
import titilliumWebBoldWoffFont from "../../../fonts/TitilliumWeb-Bold.woff"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  body {
    font-family: "Titillium Web";
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  @font-face {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 400;
    src: url(${titilliumWebWoffFont}) format("woff"),
      url(${titilliumWebTtfFont}) format("truetype");
  }

  @font-face {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 700;
    src: url(${titilliumWebBoldWoffFont}) format("woff"),
      url(${titilliumWebBoldTtfFont}) format("truetype");
  }
`
