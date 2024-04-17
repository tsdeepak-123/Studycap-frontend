import React, { useEffect, useState } from 'react';
import CollegeCardTwo from '../../../components/UserComponents/Colleges/CollegeCardTwo';
import { axiosAdmin } from '../../../Api/axiosInstance';
import DetailsModal from '../Form/DetailsModal'

function FullCollegeList() {
  const [collegeData, setCollegeData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    <div className='flex flex-col justify-center items-center'>
      {collegeData.map(college => (
        <CollegeCardTwo
          key={college._id}
          name={college.name}
          imageUrl={college.image}
          description={college.description}
          id={college._id}
          openModal={openModal} 
        />
      ))}
         <DetailsModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default FullCollegeList;
