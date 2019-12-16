import React, {PureComponent} from "react"

class GrandChild extends PureComponent {
  render() {
    console.log("[ ]   [ ]   [ ]   [👶🏻] rendered")
    return (
      <div>
        <p>I'm a GrandChild Component</p>
      </div>
    )
  }
}

export default GrandChild