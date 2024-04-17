import React from 'react';

function UniversityCard({ image, name,openModal }) {
  return (
    <div style={cardStyle} className='flex flex-col items-center'>
      <img src={image} alt="University" style={imageStyle} />
      <div style={nameStyle}>{name}</div>
      <div style={buttonContainerStyle}>
        <button onClick={openModal} className='text-blue-500'>Apply Now</button>
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
  width: '150px',
  height: '150px',
  borderRadius: '10px',
};

const nameStyle = {
  fontSize: '16px',
};

const buttonContainerStyle = {
  marginTop: '10px',
};

export default UniversityCard;
