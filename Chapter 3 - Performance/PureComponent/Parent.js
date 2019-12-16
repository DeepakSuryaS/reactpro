import React, {PureComponent} from "react"
import Child from "./Child"

class Parent extends PureComponent {
  render() {
    console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
    return (
      <div>
        <p>I am a Parent Component!</p>
        <Child />
        <Child />
      </div>
    )
  }
}

export default Parent