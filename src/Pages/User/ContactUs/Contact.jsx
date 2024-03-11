import React from 'react'
import Header from "../../../components/UserComponents/Header/Header"
import ContactUs from "../../../components/UserComponents/ContactUs/ContactUs"
import Footer from "../../../components/UserComponents/Footer/Footer"
import "./Contactus.css"

function Contact() {
  return (
    <div>
            <div className="relative banner-container">
      <Header/>
      <img
        src="/images/event.jpg"
        alt="Background"
        className="banner"
      />
      <div className="absolute text-container">
        <div className="transparent-header">
          <h1 className="about-name">CONTACT US</h1>
        </div>
      </div>
    </div>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Contact