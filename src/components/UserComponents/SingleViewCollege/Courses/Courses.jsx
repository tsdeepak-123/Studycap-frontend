import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Courses({courses}) {
  console.log(courses);
  return (
    <div className="courses-container">
      <h2 className='flex justify-center text-4xl font-bold mb-8'>Courses Offered</h2>
      <div className="courses-list">
        {courses?.map(course => (
          <div className="course">
            <div className="course-header">
              <FontAwesomeIcon icon={faGraduationCap} className="icon" />
              <h3>{course.name}</h3>
            </div>
            <p>{course.description}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
