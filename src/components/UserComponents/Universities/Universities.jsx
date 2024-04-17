import React, { useEffect, useRef, useState } from 'react';
import './Universities.css';
import UniversityCard from './UniversityCard';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { axiosAdmin } from '../../../Api/axiosInstance';
import DetailsModal from '../Form/DetailsModal';

function Universities() {
  const [visibleUniversities, setVisibleUniversities] = useState(6); 
  const [universities, setUniversities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchUniversities = async () => {
    try {
      const response = await axiosAdmin.get('/universities');
      setUniversities(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutRef.current;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offsetTop = aboutSection.offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollTop > offsetTop - windowHeight / 1.5) {
        aboutSection.classList.add('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <p className='flex justify-center text-4xl mb-10 mt-10 font-bold text-blue-600'>Top Universities</p>
      <div className='uni-container' ref={aboutRef}>
        {/* Display only the visible universities */}
        {universities.slice(0, visibleUniversities).map((university, index) => (
          <>
          <UniversityCard
            key={index}
            image={university.logo}
            name={university.name}
            buttonText1={university.buttonText1}
            buttonText2={university.buttonText2}
            openModal={openModal}
          />
          <DetailsModal isOpen={isModalOpen} closeModal={closeModal} />
          </>
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
