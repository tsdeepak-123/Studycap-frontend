import React from 'react'
import Header from '../../../components/UserComponents/Header/Header'
import Footer from '../../../components/UserComponents/Footer/Footer'
import SingleViewCollege from '../../../components/UserComponents/SingleViewCollege/SingleViewCollege'
import Intrested from '../../../components/UserComponents/Services/Intrested'
import Colleges from '../../../components/UserComponents/Colleges/Colleges'

function SingleView() {
  return (
    <div>
    <div>
      <div className="relative banner-container">
        <Header />
        <img
          src="/images/contactus.jpg"
          alt="Background"
          className="banner"
        />
        <div className="absolute text-container">
          <div className="transparent-header">
            <h1 className="about-name">COLLEGES</h1>
          </div>
        </div>
      </div>
      <SingleViewCollege/>
      <Intrested />
      <Colleges/>
      <Footer />
    </div>
  </div>
  )
}

export default SingleView

