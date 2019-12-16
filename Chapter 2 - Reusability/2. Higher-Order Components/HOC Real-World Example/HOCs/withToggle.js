import React from "react"

class Toggler extends React.Component {
  state = {
    on: this.props.defaultOnValue
  }

  toggle = () => {
    this.setState(prevState => {
      return {
        on: !prevState.on
      }
    })
  }

  render() {
    const Component = this.props.component // since we're passing component as a prop in <Toggler component={component}
    //const {component: Component, defaultOnValue, ...props} = this.props // this is object destructing
    return (
      <Component on={this.state.on} toggle={this.toggle} {...this.props}/> // it can be just {...props} as per the object destructuring and <C /> instead of <Component />
    )
  }
}

export function withToggle(component, optionsObj) {
  return function(props) {
    return (
      <Toggler component={component} defaultOnValue={optionsObj.defaultOnValue} {...props} />
    )
  }
}


/* if you don't understand this, try imagining the process right from the function call */