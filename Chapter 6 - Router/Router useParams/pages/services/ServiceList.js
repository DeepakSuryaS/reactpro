import React from "react"
import servicesData from "./servicesData"

function ServicesList() {
  const services = servicesData.map(service => (
    <h3 key={service._id}>
      <Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}
    </h3>
  ))
  return (
    <div>
      <h1>Services List Page</h1>
      {services}
    </div>
  )
}

export default ServicesList