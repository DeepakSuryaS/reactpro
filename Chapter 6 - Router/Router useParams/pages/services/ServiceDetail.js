import React from "react"
import servicesData from "./servicesData"
import {useParams} from "react-router-dom"

function ServiceDetail(props) {
  const {serviceId} = useParams()
  const thisService = servicesData.find(service => service._id === serviceId)
  return (
    <div>
      <h1>Service Detail Page</h1>
      <h3>{thisService.name} - ${thisService.price}</h3>
      <p>{thisService.description}</p>
    </div>
  )
}

export default ServiceDetail