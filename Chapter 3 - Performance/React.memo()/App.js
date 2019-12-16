import React, {PureComponent} from "react"
import GrandParent from "./GrandChild"

class App extends PureComponent {
  state = { count: 0 }

  increment = () => this.setState(prevState => ({count: prevState.count + 1}))

  render() {
    console.log("[GP] [P] [C] [GC] APP just rendered")
    return (
      <div>
        <button onClick={this.increment}>+1</button>
        <h2>{this.state.count}</h2>
        <p>I am an App Component!</p>
        <GrandParent />
        <GrandParent />
      </div>
    )
  }
}

export default App