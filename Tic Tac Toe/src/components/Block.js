import React from 'react'

function Block(props) {
  return (
    <button 
      className="block"
      onClick={props.handleClick}
    >
      {props.value}
    </button>
  )
}

export default Block