// UserHome.js
import React, { useEffect, useState } from 'react';
import Footer from '../../components/UserComponents/Footer/Footer';
import Home from '../../components/UserComponents/Home/Home';
import Colleges from '../../components/UserComponents/Colleges/Colleges';
import Universities from '../../components/UserComponents/Universities/Universities';
import TestModal from '../../components/UserComponents/Modal/TestModal';
import Services from '../../components/UserComponents/Services/Services';
import Intrested from '../../components/UserComponents/Services/Intrested';
import States from '../../components/UserComponents/States/States';
import DetailsForm from '../../components/UserComponents/Form/DetailsForm';
import FormBox from '../../components/UserComponents/Form/FormBox';
import DetailsModal from '../../components/UserComponents/Form/DetailsModal';

function UserHome() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const backgroundStyle = {
    backgroundImage: "url('/Images/banner5.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '20px',
  };

  return (
    <div className='overflow-hidden'>
      <Home/>
      <DetailsModal/>
      {/* {showModal && <TestModal closeModal={closeModal}/>} */}
      <Universities/>
      <Colleges/>
      <div>
        <h1 className='text-4xl flex justify-center text-blue-600 font-bold mb-8'>Our Services</h1>
        <Services/>
      </div>
      <Intrested/>
      <h1 className='text-4xl flex justify-center text-blue-600 font-bold mb-8'>Talk to Our Experts</h1>
      <div style={backgroundStyle}>
        <FormBox/>
        <States/>
      </div>
      <Footer/>
    </div>
  );
}

export default UserHome;
