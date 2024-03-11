import React from 'react'
import Header from "../../../components/UserComponents/Header/Header"
import About from "../../../components/UserComponents/About/About"
import Footer from "../../../components/UserComponents/Footer/Footer"
import "./About.css"
import Team from '../../../components/UserComponents/About/Team'

function AboutUs() {
  return (
    <div>
            <div className="relative banner-container">
      <Header/>
      <img
        src="/images/event1.jpg"
        alt="Background"
        className="banner"
      />
      <div className="absolute text-container">
        <div className="transparent-header">
          <h1 className="about-name">ABOUT US</h1>
        </div>
      </div>
    </div>
    <div>
      <p className='about-heading'>We Are Kaaf</p>
    </div>
    <About/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default AboutUs