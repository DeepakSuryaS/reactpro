import React from "react"
import Parent from "./Parent"

function GrandParent(props) {
  console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
  return (
    <div>
      <p>I am a GrandParent Component!</p>
      <Parent />
      <Parent />
    </div>
  )
}

export default React.memo(GrandParent)


/* Custom memo function */
/* import React from "react"
import Parent from "./Parent"

function GrandParent(props) {    
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a GrandParent Component</p>
            <Parent />
            <Parent />
        </div>
    )
} */

// function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
// }

// export default React.memo(GrandParent, areEqual)

/* above, the areEqual function will be used to check memoization instead of the default function under the hood to determine whether to use the memoized version or the new version */