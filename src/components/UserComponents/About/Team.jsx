import React from 'react'
import TeamPhoto from './TeamPhoto'

function Team() {
    const teamMembers = [
        {
          name: 'John Doe',
          position: 'CEO',
          photo: '/Images/saneed.png',
        },
        {
          name: 'Jane Smith',
          position: 'Designer',
          photo: '/Images/saneed.png',
        },
        {
          name: 'Jane Smith',
          position: 'Designer',
          photo: '/Images/saneed.png',
        },
        {
          name: 'Jane Smith',
          position: 'Designer',
          photo: '/Images/saneed.png',
        },
        {
          name: 'Jane Smith',
          position: 'Designer',
          photo: '/Images/saneed.png',
        },
        {
          name: 'Jane Smith',
          position: 'Designer',
          photo: '/Images/saneed.png',
        },
      ];
  return (
    <div className="team">
    <h2>Our Team</h2>
    <div className="team-members">
      {teamMembers.map((member, index) => (
        <TeamPhoto
          key={index}
          name={member.name}
          position={member.position}
          photo={member.photo}
        />
      ))}
    </div>
  </div>
  )
}

export default Team