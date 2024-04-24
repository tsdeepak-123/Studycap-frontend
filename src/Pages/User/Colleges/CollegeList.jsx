import React, { useEffect } from "react";
import Header from "../../../components/UserComponents/Header/Header";
import Intrested from "../../../components/UserComponents/Services/Intrested";
import Footer from "../../../components/UserComponents/Footer/Footer";
import FullCollegeList from "../../../components/UserComponents/Colleges/FullCollegeList";

function CollegeList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <div className="relative banner-container">
          <Header />
          <img
            src="/Images/contactus.jpg"
            alt="Background"
            className="banner"
          />
          <div className="absolute text-container">
            <div className="transparent-header">
              <h1 className="about-name">COLLEGES</h1>
            </div>
          </div>
        </div>
        <div>
          <p className="contact-heading">Explore Top Colleges</p>
        </div>
        <FullCollegeList />
        <Intrested />
        <Footer />
      </div>
    </div>
  );
}

export default CollegeList;
