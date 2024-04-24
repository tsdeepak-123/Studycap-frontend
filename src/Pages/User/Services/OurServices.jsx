import React, { useEffect } from 'react'
import "./Service.css"
import Header from "../../../components/UserComponents/Header/Header"
import Services from "../../../components/UserComponents/Services/Services"
import Colleges from "../../../components/UserComponents/Colleges/Colleges"
import Footer from "../../../components/UserComponents/Footer/Footer"
import Intrested from '../../../components/UserComponents/Services/Intrested'

function OurServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
                    <div className="relative banner-container">
      <Header/>
      <img
        src="/Images/colleges.jpg"
        alt="Background"
        className="banner"
      />
      <div className="absolute text-container">
        <div className="transparent-header">
          <h1 className="about-name">OUR SERVICES</h1>
        </div>
      </div>
    </div>
    <div>
      <p className='flex justify-center sm:text-4xl text-2xl font-bold mt-4'>WHAT WE DO FOR YOU</p>
    </div>
    <Services/>
    <Intrested/>
    <Colleges/>
        <Footer/>
    </div>
  )
}

export default OurServices