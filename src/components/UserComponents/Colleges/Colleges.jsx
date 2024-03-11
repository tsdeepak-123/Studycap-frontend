import React, { useState } from "react";
import CollegeCard from "./CollegeCard";
import "./College.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


function Colleges() {
  const [visibleColleges, setVisibleColleges] = useState(8);

  const collegeData = [
    {
      image: "/Images/college.png",
      name: "Mary Matha College",
      description: "qwertyuigdsfghjfgfghhfhggggg",
    },
    {
      image: "/Images/college1.png",
      name: "Mary Matha College",
      description: "qwertyuigdsfghjfgfghhfhggggg",
    },
    {
      image: "/Images/college2.png",
      name: "Mary Matha College",
      description: "qwertyuigdsfghjfgfghhfhggggg",
    },
    {
      image: "/Images/college3.png",
      name: "Mary Matha College",
      description: "qwertyuigdsfghjfgfghhfhggggg",
    },
    {
      image: "/Images/college4.png",
      name: "Mary Matha College",
      description: "qwertyuigdsfghjfgfghhfhggggg",
    },
    {
      image: "/Images/college5.png",
      name: "Mary Matha College",
      description: "qwertyuigdsfghjfgfghhfhggggg",
    },
    {
      image: "/Images/college6.png",
      name: "Mary Matha College",
      description: "qwertyuigdsfghjfgfghhfhggggg",
    },
    {
      image: "/Images/college1.png",
      name: "Mary Matha College",
      description: "qwertyuigdsfghjfgfghhfhggggg",
    },
    {
      image: "/Images/college5.png",
      name: "Matha College",
      description: "qwertyuigdsfghjfgfghhfhggggg",
    },
  ];

  return (
    <>
      <p className="flex justify-center text-4xl mt-8 mb-8">Top Colleges</p>
      <div className="container">
        {collegeData.slice(0, visibleColleges).map((college, index) => (
          <CollegeCard
            key={index}
            image={college.image}
            name={college.name}
            description={college.description}
          />
        ))}
      </div>
      <div className="button-div">
      <button
          className='view-all-button text-blue-600'
        >
          View More <NavigateNextIcon/>
        </button>
      </div>
    </>
  );
}

export default Colleges;
