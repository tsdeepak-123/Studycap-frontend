import React from 'react'
import "./Service.css"
import Header from "../../../components/UserComponents/Header/Header"
import Services from "../../../components/UserComponents/Services/Services"
import Colleges from "../../../components/UserComponents/Colleges/Colleges"
import Footer from "../../../components/UserComponents/Footer/Footer"
import Intrested from '../../../components/UserComponents/Services/Intrested'

function OurServices() {
  return (
    <div>
                    <div className="relative banner-container">
      <Header/>
      <img
        src="/images/colleges.jpg"
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
      <p className='about-heading'>WHAT WE DO FOR YOU</p>
    </div>
    <Services/>
    <Intrested/>
    <Colleges/>
        <Footer/>
    </div>
  )
}

export default OurServices