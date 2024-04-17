import React from 'react';
import {useNavigate} from 'react-router-dom'
import './CollegeCardTwo.css';

function CollegeCardTwo({ name, description, imageUrl ,id,openModal}) {
  console.log(id);
  const navigate=useNavigate()
  const handleClick = () => {
    openModal();
  };

  const handleSingleView=(id)=>{
    console.log("button clicked");
    navigate('/collegeview',{state:{id}})
  }
 return (
    <div className="college-card">
      <div className="college-info">
        <div className="left-section">
          <img src={imageUrl} alt={name} className="college-image" />
        </div>
        <div className="right-section">
          <h2 className="college-name">{name}</h2>
          <p className="college-description">{description}</p>
          <div className="college-buttons">
            <button className="apply-button" onClick={handleClick}>Apply Now</button>
            <button className="details-button" onClick={() => handleSingleView(id)}>View Details</button>
          </div>
        </div>
      </div>
    </div>
 );
}

export default CollegeCardTwo;
