import React from "react"
import ThemeContext from "./themeContext"

class Button extends React.Component {
  static contextType = ThemeContext
  render() {
    const color = this.context
    return (
      <button className={`${color}-theme`}>Switch Theme</button>
    )
  }
}

export default Button