import React, { useState } from 'react';
import './CollegeCard.css';
import { useNavigate } from 'react-router-dom';

function CollegeCard({ image, name, description ,openModal,id}) {
const navigate = useNavigate()
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleSingleView=(id)=>{
    console.log("button clicked");
    navigate('/collegeview',{state:{id}})
  }

  return (
    <div className="college-card">
      <div className="college-card-content">
        <img src={image} alt={name} className="college-card-image" />
        <p className="college-card-name">{name}</p>
        <div className="college-card-description">
          {expanded ? description : `${description.slice(0, 100)}...`}
          <button className="read-more-button" onClick={toggleExpanded}>
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
        <div className="college-card-buttons">
          <button className="college-card-button apply-now" onClick={openModal}>Apply Now</button>
          <button className="college-card-button view-details" onClick={() => handleSingleView(id)}>View Details</button>      
        </div>
      </div>
    </div>
  );
}

export default CollegeCard;
