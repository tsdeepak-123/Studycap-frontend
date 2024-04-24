import React, { useEffect } from 'react'
import Header from "../../../components/UserComponents/Header/Header"
import Footer from "../../../components/UserComponents/Footer/Footer"
import Universities from '../../../components/UserComponents/Universities/Universities'
import "./About.css"
import StudyCap from '../../../components/UserComponents/StudyCap/StudyCap'
import Intrested from '../../../components/UserComponents/Services/Intrested'
import FormBox from '../../../components/UserComponents/Form/FormBox'

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
            <div className="relative banner-container">
      <Header/>
      <img
        src="/Images/about.jpg"
        alt="Background"
        className="banner"
      />
      <div className="absolute text-container">
        <div className="transparent-header">
          <h1 className="about-name">ABOUT STUDYCAP</h1>
        </div>
      </div>
    </div>
    <div>
      <p className='about-heading'>WHY STUDYCAP</p>
    </div>
    <StudyCap/>
   <Intrested/>
   <Universities/> 
   <Footer/>
    </div>
  )
}

export default AboutUs