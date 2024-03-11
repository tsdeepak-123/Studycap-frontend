import React from 'react';
import './CollegeCard.css';

function CollegeCard({ image, name, description }) {
 return (
    <div className="college-card">
      <img src={image} alt={name} className="college-card-image" />
      <div className="college-card-content">
        <p className="college-card-name">{name}</p>
        <p className="college-card-description">{description}</p>
        <div className="college-card-buttons">
          <button className="college-card-button apply-now">Apply Now</button>
          <button className="college-card-button view-details">View Details</button>
        </div>
      </div>
    </div>
 );
}

export default CollegeCard;
