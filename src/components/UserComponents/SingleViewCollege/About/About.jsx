import React from 'react';
import './About.css';

function About({description,image,name}) {
  return (
    <div className="about-container">
      <p className='font-bold text-4xl mb-4'>{name}</p>
      <p>{description}</p>
    <img src={image} alt="College" className="college-image"/>
    </div>
  );
}

export default About;
