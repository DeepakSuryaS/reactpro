import React from "react"
import productsData from "./productsData"

function Products() {    
  const products = productsData.map(prod => (
    <div key={prod.id}>
      <h3>{prod.name}</h3>
      <p>Price: ${prod.price}</p>
      <hr />
    </div>
  ))
  return (
    <>
      <h1>Products Page</h1>
      {products}
    </>
  )
}

export default Products