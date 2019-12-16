import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import ThemeContext from "./themeContext"

ReactDOM.render(
  <ThemeContext value={"light"}>
    <App />
  </ThemeContext>,
  document.getElementById('root')
)