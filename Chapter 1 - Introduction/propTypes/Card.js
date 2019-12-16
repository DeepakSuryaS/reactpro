import React from "react"
import PropTypes from "prop-types"

function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width
  }

  return (
    <div style={styles}></div>
  )
}

Card.propTypes = {
  // cardColor: PropTypes.oneOf(['purple', 'blue']).isRequired, // this will work too because we can chain isRequired to anything.
  cardColor: PropTypes.oneOf(['purple', 'blue']),
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

Card.defaultProps = {
  cardColor: "blue",
  height: 150,
  width: 150
}

export default Card