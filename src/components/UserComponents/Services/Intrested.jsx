import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intrested.css';

function Intrested() {
 const navigate=useNavigate()
  const cardStyle = {
    marginTop: '50px',
    maxWidth: '80%',
    margin: '0 auto',
    backgroundImage: `url('/Images/admService.jpg')`, // Replace 'path/to/your/image.jpg' with the path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '10px',
    padding: '10%',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '50px'
  };

  const handleIntrested=()=>{
navigate('/contactus')
  }
  return (
    <div style={cardStyle} className="card">
      <div className="content">
        <h2>Interested in Our Services?</h2>
        <p>Looking for admissions or interested in partnering with us? Get in touch to take it forward!</p>
      </div>
      <button onClick={handleIntrested} className='contact-button'>Contact Us</button>
    </div>
  );
}

export default Intrested;

