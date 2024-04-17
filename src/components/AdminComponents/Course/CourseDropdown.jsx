import React from 'react';
import './CourseDropdown.css'

function CourseDropdown({ courses, selectedCourses, setSelectedCourses }) {
  const handleCourseSelection = (e) => {
    const { value, checked } = e.target;
    let updatedSelectedCourses = [...selectedCourses];

    if (checked && !updatedSelectedCourses.includes(value)) {
      updatedSelectedCourses.push(value);
    } else if (!checked && updatedSelectedCourses.includes(value)) {
      updatedSelectedCourses = updatedSelectedCourses.filter((course) => course !== value);
    }

    setSelectedCourses(updatedSelectedCourses);
  };

  return (
    <div>
        <p className='text-gray-600 mb-2'>Select Courses</p>
    <div className="courseDropdownContainer">
      {courses && courses.map((course) => (
        <label key={course._id} className="courseLabel">
          <input
            type="checkbox"
            value={course.name}
            checked={selectedCourses.includes(course.name)}
            onChange={handleCourseSelection}
          />
          {course.name}
        </label>
      ))}
    </div>
    </div>
  );
}

export default CourseDropdown;
