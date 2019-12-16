import React from "react"
import RoundedImg from "./RoundedImg"

function App() {    
  return (
    <div>
      <RoundedImg src="https://picsum.photos/id/237/300/300" borderRadius="10px" />
      <RoundedImg src="https://picsum.photos/id/237/300/300" borderRadius={40} />
      <RoundedImg src="https://picsum.photos/id/237/300/300" />
    </div>
  )
}

export default App