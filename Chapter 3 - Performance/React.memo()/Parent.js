import React from "react"
import Child from "./Child"

export default React.memo(function Parent() {
  console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
  return (
    <div>
      <p>I am a Parent Component!</p>
      <Child />
      <Child />
    </div>
  )
})