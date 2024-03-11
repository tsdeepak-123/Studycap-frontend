import React, { useState, useEffect } from 'react';
import "./Home.css";
import Header from '../Header/Header';
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link  } from "react-scroll"

function Home() {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const images = ["/Images/banner5.jpg", "/Images/banner6.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative banner-container">
      <Header/>
      <img
        src={images[backgroundImageIndex]}
        alt="Background"
        className="banner-image"
      />
      <div className='button'>
      <Link to='' smooth={true} duration={500} > <button className="explore-button group text-white  px-6 py-3 my-2 flex items-center hover:bg-cyan-500 hover:border-cyan-500" >Explore Colleges
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-10 "/>
            </span>
             </button> </Link>
      </div>
    </div>
  );
}

export default Home;
