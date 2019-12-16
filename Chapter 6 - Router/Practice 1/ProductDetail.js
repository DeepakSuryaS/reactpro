import React from "react"
import productsData from "./productsData"
import {useParams} from "react-router-dom"

function ProductDetail(props) {
  
  const {productId} = useParams()
  const thisProduct = productsData.find(product => product.id === productId)
  
  return (
    <div>
      <h1>{thisProduct.name}</h1>
      <h3>{thisProduct.description}</h3>
      <h3>${thisProduct.price}</h3>
    </div>
  )
}

export default ProductDetail