import React from 'react'
import "./Portfolio.css"
import Header from "../../../components/UserComponents/Header/Header"
import Gallery from "../../../components/UserComponents/Gallery/Gallery"
import Footer from "../../../components/UserComponents/Footer/Footer"

function Portfolio() {
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
          <h1 className="about-name">PORTFOLIO</h1>
        </div>
      </div>
    </div>
    <Gallery/>
        <Footer/>
    </div>
  )
}

export default Portfolio