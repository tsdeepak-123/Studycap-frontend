import React from 'react'
import "./Service.css"
import Header from "../../../components/UserComponents/Header/Header"
import Services from "../../../components/UserComponents/Services/Services"
import Footer from "../../../components/UserComponents/Footer/Footer"

function OurServices() {
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
          <h1 className="about-name">OUR SERVICES</h1>
        </div>
      </div>
    </div>
    <Services/>
        <Footer/>
    </div>
  )
}

export default OurServices