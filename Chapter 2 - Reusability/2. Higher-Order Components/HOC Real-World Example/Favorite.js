import React from "react"
import {withToggle} from "./HOCs/withToggle"

function Favorite(props) {
  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span 
          onClick={props.toggle}
        >
          {props.on ? "❤️" : "♡"}
        </span>
      </h1>
    </div>
  ) 
}

export default withToggle(Favorite, {defaultOnValue: false})