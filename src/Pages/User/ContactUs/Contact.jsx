import React, { useEffect } from 'react'
import Header from "../../../components/UserComponents/Header/Header"
import ContactUs from "../../../components/UserComponents/ContactUs/ContactUs"
import Intrested from '../../../components/UserComponents/Services/Intrested'
import Colleges from '../../../components/UserComponents/Colleges/Colleges'
import Footer from "../../../components/UserComponents/Footer/Footer"
import "./Contactus.css"

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
            <div className="relative banner-container">
      <Header/>
      <img
        src="/Images/contactus.jpg"
        alt="Background"
        className="banner"
      />
      <div className="absolute text-container">
        <div className="transparent-header">
          <h1 className="about-name">CONTACT US</h1>
        </div>
      </div>
    </div>
    <div>
      <p className='contact-heading'>GET IN TOUCH</p>
    </div>
        <ContactUs/>
        <Intrested/>
        <Colleges/>
        <Footer/>
    </div>
  )
}

export default Contact