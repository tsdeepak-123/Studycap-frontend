import React, { useState, useEffect } from 'react';
import "./Home.css";
import Header from '../Header/Header';
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"
import { axiosAdmin } from '../../../Api/axiosInstance';

function Home() {
 const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
 const [banners, setBanners] = useState([]);
 const fetchBanners = async () => {
  try {
    const response = await axiosAdmin.get('findbanner');
      setBanners(response.data.allBannerData);
  } catch (err) {
    console.log(err);
  }
};
console.log(banners);

useEffect(() => {
  fetchBanners();
}, []);

useEffect(() => {
  if (banners.length > 1) {
    const interval = setInterval(() => {
      setBackgroundImageIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 3000); 
    return () => clearInterval(interval);
  }
}, [banners]);


 return (
    <div className="relative banner-container">
      <Header/>
      <img
        src={banners[backgroundImageIndex]?.photo}
        alt={banners[backgroundImageIndex]?.name}
        className="banner-image"
      />
      <div className='text-container'>
        <h1 className="animated-text company-name">STUDYCAP</h1>
        <p className="animated-text slogan">Unlocking Bright Futures, One Student at a Time.</p>
      </div>
      <div className='button'>
        <Link to='/colleges' smooth={true} duration={500} >
          <button className="explore-button group text-white sm:px-6 sm:py-3 my-2 px-7 py flex items-center">
            Explore Colleges
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4 w-8 h-8" />
            </span>
          </button>
        </Link>
      </div>
    </div>
 );
}

export default Home;
