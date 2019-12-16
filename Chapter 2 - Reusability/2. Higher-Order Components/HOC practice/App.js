import React from "react"
import {withFavoriteNumber} from "./withFavoriteNumber"

function App(props) {
  return (
    <div>Hello, World! {props.favoriteNumber}</div>
  )
}

export default withFavoriteNumber(App)