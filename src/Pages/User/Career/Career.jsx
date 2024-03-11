import React from 'react'
import Header from "../../../components/UserComponents/Header/Header"
import BuildCareer from '../../../components/UserComponents/Career/BuildCareer'
import Footer from "../../../components/UserComponents/Footer/Footer"
import "./Career.css"

function Career() {
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
          <h1 className="about-name">CAREER</h1>
        </div>
      </div>
    </div>
    <BuildCareer/>
        <Footer/>
    </div>
  )
}

export default Career