import React from "react"
import ThemeContext from "./themeContext"

class Header extends React.Component {
  render() {
    const color = this.context
    return (
      <header className={`${color}-theme`}>
        <h2>{color === "light" ? "Light" : "Dark"} Theme</h2>
      </header>
    )
  }
}

Header.contextType = ThemeContext

export default Header