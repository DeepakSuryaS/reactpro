import React, { useState } from "react"


function App() {

  const [ count, setCount ] = useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  function double() {
    setCount(prevCount => prevCount * 2)
  }

  function half() {
    setCount(prevCount => prevCount / 2)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={double}>Double</button>
      <button onClick={half}>Half</button>
    </div>
  )
}

export default App