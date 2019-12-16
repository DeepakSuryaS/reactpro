import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Header(props) {
  const {theme} = useContext(ThemeContext)
  return (
    <header className={`${theme}-theme`}>
      <h2>{theme == 'dark' ? 'Dark' : 'Light'} Theme</h2>
    </header>
  )
}

export default Header