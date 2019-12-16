import React from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import ServicesList from "./pages/services/ServicesList"
import ServiceDetail from "./pages/services/ServiceDetail"

import {Switch, Route} from "react-router-dom"

function App() {    
  return (
    <div>
      <Header />
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/services" >
          <ServicesList />
        </Route>
        <Route path="/services/:serviceId" >
          <ServiceDetail />
        </Route>
      </Switch>
    </div>
  )
}

export default App