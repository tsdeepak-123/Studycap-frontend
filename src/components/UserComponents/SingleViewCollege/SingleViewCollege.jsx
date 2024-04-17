import React, { useEffect, useState } from 'react';
import './SingleViewCollege.css';
import { useLocation } from 'react-router-dom';
import About from './About/About';
import Courses from './Courses/Courses';
import Gallery from './Gallery/Gallery';
import {axiosAdmin} from '../../../Api/axiosInstance'

function SingleViewCollege() {
  const location = useLocation();
  const id = location.state?.id; 
  const [college, setCollege] = useState(null);

   const fetchCollege = async () => {
    try {
      const response = await axiosAdmin.get(`/collegebyid/${id}`);
      setCollege(response.data);
    } catch (error) {
      console.error('Error fetching college:', error);
    }
  };
  useEffect(() => {
    fetchCollege();
  }, [id]);

  if (!college) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <About description={college.description} image={college.image} name={college.name}/>
      <Courses courses={college.courses}/>
      <div className='mb-14'>
        <Gallery images={college.gallery}/>
      </div>
    </div>
  );
}

export default SingleViewCollege;
