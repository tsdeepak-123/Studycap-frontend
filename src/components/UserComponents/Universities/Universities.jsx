import React, { useState } from 'react';
import './Universities.css';
import UniversityCard from './UniversityCard';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Universities() {
  const [visibleUniversities, setVisibleUniversities] = useState(8); // Set the initial number of visible universities

  // University data
  const universityData = [
    {
      image: '/Images/uni1.png',
      name: 'Name of University 1',
   
    },
    {
      image: '/Images/uni2.png',
      name: 'Name of University 2',
  
    },
    {
      image: '/Images/uni3.png',
      name: 'Name of University 2',
   
    },
    {
      image: '/Images/uni1.png',
      name: 'Name of University 2',
   
    },
    {
      image: '/Images/uni4.png',
      name: 'Name of University 2',
   
    },
    {
      image: '/Images/uni2.png',
      name: 'Name of University 2',
   
    },
    {
      image: '/Images/uni5.png',
      name: 'Name of University 2',
   
    },
    {
      image: '/Images/uni6.png',
      name: 'Name of University 2',
   
    },
  ];

  return (
    <>
      <p className='flex justify-center text-4xl mb-10 mt-10'>Top Universities</p>
      <div className='uni-container'>
        {/* Display only the visible universities */}
        {universityData.slice(0, visibleUniversities).map((university, index) => (
          <UniversityCard
            key={index}
            image={university.image}
            name={university.name}
            buttonText1={university.buttonText1}
            buttonText2={university.buttonText2}
          />
        ))}
      </div>
      <div className='button-div'>
        <button
          className='view-all-button text-blue-600'
        >
          View More <NavigateNextIcon/>
        </button>
      </div>
    </>
  );
}

export default Universities;
