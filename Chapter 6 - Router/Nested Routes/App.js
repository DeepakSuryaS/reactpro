import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"
/* import Info from "./pages/profile/Info"
import Settings from "./pages/profile/Settings" */

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        {/* <Route path="/profile/info">
          <Info />
        </Route>
        <Route path="/profile/settings">
          <Settings />
        </Route> */}
      </Switch>

      <Footer />
    </div>
  )
}

export default App