import React, {PureComponent} from "react"
import GrandChild from "./GrandChild"

class Child extends PureComponent {
  render() {
    console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
    return (
      <div>
        <p>I am a Parent Component!</p>
        <GrandChild />
        <GrandChild />
      </div>
    )
  }
}

export default Child