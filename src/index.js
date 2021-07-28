import React from "react"
import ReactDOM from "react-dom"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Secular One', sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <h1>Hello</h1>
  </React.StrictMode>,
  document.getElementById("root")
)
