import React from 'react'
import "./Team.css"

function TeamPhoto({ name, position, photo }) {
  return (
    <div className="team-member">
    <img src={photo} alt={""} className='round-image'/>
    <h3>{name}</h3>
    <p>{position}</p>
  </div>
  )
}

export default TeamPhoto