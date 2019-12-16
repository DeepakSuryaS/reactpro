import React from "react"

import UserContext from "./userContext"

class Header extends React.Component {
  static contextType = UserContext
  render() {
    const username = this.context
    return (
      <header>
        <p>Welcome, {username}!</p>
      </header>
    )
  }
}

export default Header