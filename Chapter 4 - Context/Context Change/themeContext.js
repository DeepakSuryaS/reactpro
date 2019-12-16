import React from "react"

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component {
  state = {
    theme: "light"
  }

  toggleTheme = () => {
    this.setState(prevState => ({theme: prevState.theme === "light" ? "dark" : "light"}))
  }

  render() {
    return (
      <Provider value={{theme: this.state.theme, toggleTheme: this.state.toggleTheme}}>
        {this.props.children}
      </Provider>
    )
  }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}