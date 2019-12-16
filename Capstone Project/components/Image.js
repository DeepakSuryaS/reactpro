import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../CartContext"
import {useHover} from "../hooks/useHover"

function Image(props) {
  
  const [hovered, ref] = useHover()
  const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

  function heartIcon() {
    if(props.img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(props.img.id)}></i>
    } else if(hovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(props.img.id)}></i>
    }
  }
  
  function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === props.img.id)
    if(alreadyInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(props.img.id)}></i>
    } else if(hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(props.img)}></i>
    }
  }
  
  return (
    <div 
      className={`${props.className} image-container`}
      ref={ref}
    >
      <img src={props.img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}

export default Image