import React, {memo} from "react"
import GrandChild from "./GrandChild"

function Child() {
  console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
  return (
    <div>
      <p>I am a Parent Component!</p>
      <GrandChild />
      <GrandChild />
    </div>
  )
}

export default memo(Child)