import React, { useEffect, useRef, useState } from "react";
import CollegeCard from "./CollegeCard";
import "./College.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { axiosAdmin } from "../../../Api/axiosInstance";
import DetailsModal from "../Form/DetailsModal";


function Colleges() {
  const [visibleColleges, setVisibleColleges] = useState(6);
  const[collegeData,setCollegeData]=useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutRef.current;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offsetTop = aboutSection.offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollTop > offsetTop - windowHeight / 1.5) {
        aboutSection.classList.add('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchColleges = async () => {
    try {
      const response = await axiosAdmin.get('/colleges');
      setCollegeData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };


  useEffect(() => {
    fetchColleges();
  }, []);

  return (
    <div className="mb-14">
      <p className="flex justify-center text-4xl mt-8 mb-14 font-bold text-blue-600">Top Colleges</p>
      <div className="container" ref={aboutRef}>
        {collegeData.slice(0, visibleColleges)?.map((college, index) => (
          <CollegeCard
            key={index}
            image={college.image}
            name={college.name}
            description={college.description}
            openModal={openModal} 
          />
        ))}
        <DetailsModal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
      <div className="button-div">
      <button
          className='view-all-button text-blue-600'
        >
          View More <NavigateNextIcon/>
        </button>
      </div>
    </div>
  );
}

export default Colleges;
