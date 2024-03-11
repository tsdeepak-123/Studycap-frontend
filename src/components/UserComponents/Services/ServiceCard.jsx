import React from 'react'
import "./ServiceCard.css"

function ServiceCard({name,image,des}) {
  return (
    <div className="service">
    <div className="service-image">
      <img src={image} alt="Pirate Treasure Hunt" />
    </div>
    <div className="service-details">
      <h3>{name}</h3>
      <p>{des}</p>
    </div>
  </div>
  )
}

export default ServiceCard