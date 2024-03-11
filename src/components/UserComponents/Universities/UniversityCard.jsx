import React from 'react';

function UniversityCard({ image, name}) {
 return (
    <div style={cardStyle}>
      <img src={image} alt="University" style={imageStyle} />
      <div style={nameStyle}>{name}</div>
      <div style={buttonContainerStyle}>
        <button  className='text-blue-500'>Apply Now</button>
      </div>
    </div>
 );
}

const cardStyle = {
 border: '1px solid #ccc',
 borderRadius: '10px',
 padding: '20px',
 width: '300px',
 boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
 margin: '10px',
};

const imageStyle = {
 width: '100%',
 height: 'auto',
 borderRadius: '10px',
};

const nameStyle = {
  display: 'flex',
 justifyContent: 'center',
 fontSize: '16px',
 
};

const buttonContainerStyle = {
 display: 'flex',
 justifyContent: 'center',
 marginTop: '10px',
};


export default UniversityCard;
