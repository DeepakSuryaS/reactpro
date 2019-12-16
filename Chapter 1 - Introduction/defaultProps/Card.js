import React from "react"

/* function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width
  }

  return (
    <div style={styles}></div>
  )
}

Card.defaultProps = {
  cardColor: "blue",
  height: 150,
  width: 150
} */

class Card extends React.Component {
  
  // we can also specify defaultProps as a class property here because of javascript proposals
  static defaultProps = {
    cardColor: "blue",
    height: 150,
    width: 150
  }

  render() {
    const styles = {
      backgroundColor: this.props.cardColor,
      height: this.props.height,
      width: this.props.width
    }

    return (
      <div styles={styles}></div>
    )
  }
}

/* Card.defaultProps = {
  cardColor: "blue",
  height: 150,
  width: 150
} */

export default Card