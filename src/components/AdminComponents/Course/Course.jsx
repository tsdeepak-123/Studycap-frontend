import React, { useState, useEffect } from 'react';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from "@mui/material";
import AddCourseModal from './AddCourseModal';
import { axiosAdmin } from '../../../Api/axiosInstance';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function CourseContainer() {
  const [courses, setCourses] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const fetchCourses = async () => {
    try {
      const response = await axiosAdmin.get('/courses');
      setCourses(response.data.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };


  useEffect(() => {
    fetchCourses();
  }, [courses]); 

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  const handleDeleteCourse = async (courseId) => {
    try {
      await axiosAdmin.patch(`/deletecourses/${courseId}`);
      fetchCourses();
    } catch (err) {
      console.log(err.message);
    }
  };
  
  return (
    <div>
      <div className='flex justify-end mb-2'>
        <Button variant="outlined" onClick={handleOpenModal}>ADD COURSE</Button>
        <AddCourseModal open={openModal} handleClose={handleCloseModal} />
      </div>
      <CourseTable courses={courses} handleDeleteCourse={handleDeleteCourse}/>
    </div>
  );
}
function CourseTable({ courses, handleDeleteCourse }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} align="center">
                No data available
              </TableCell>
            </TableRow>
          ) : (
            courses.map((course) => (
              <TableRow key={course._id}>
                <TableCell component="th" scope="row">
                  {course.name}
                </TableCell>
                <TableCell>{course.description}</TableCell>
                <TableCell>{course.duration}</TableCell>
                <TableCell>
                  <IconButton aria-label="edit">
                    <FontAwesomeIcon className="text-yellow-500" icon={faEdit} />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <FontAwesomeIcon
                      onClick={() => handleDeleteCourse(course._id)}
                      className="text-red-500"
                      icon={faTrash}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default CourseContainer;
