import React, {useState, useContext} from "react"
import {Context} from "../CartContext"
import CartItem from "../components/CartItem"

function Cart() {

  const [buttonText, setButtonText] = useState("Place Order")
  const {cartItems, emptyCart} = useContext(Context)
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

  const carItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  function placeOrder() {
    setButtonText("Ordering...")
    setTimeout(() => {
      console.log("Order Placed!")
      setButtonText("Place Order")
      emptyCart()
    }, 3000)
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {carItemElements}
      <p className="order-button">Total: {totalCostDisplay}</p>
      {
        cartItems.length > 0 ? 
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
        :
        <p>You have no items in your cart.</p>
      }
    </main>
  )
}

export default Cart