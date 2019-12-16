import React from "react"
import {Switch, Route, Link} from "react-router-dom"

import Info from "./Info"
import Settings from "./Settings"

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li><Link to="/profile/info">Profile Info</Link></li>
        <li><Link to="/profile/settings">Profile Settings</Link></li>
      </ul>

      <Switch>
        <Route path="/profile/info">
          <Info />
        </Route>
        <Route path="/profile/settings">
          <Settings />
        </Route>
      </Switch>
    </div>
  )
}

export default Profile