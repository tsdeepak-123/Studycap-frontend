import React, { useState } from 'react';
import { Modal, IconButton, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { axiosAdmin } from '../../../Api/axiosInstance';
import { styled } from "@mui/system";

const ModalContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const ModalContent = styled("div")({
  backgroundColor: "#fff",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "400px",
  width: "90%",
});

const CloseButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
});

function AddCourseModal({ open, handleClose }) {
  const [courseData, setCourseData] = useState({
    name: "",
    description: "",
    duration: ""
  });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleAddCourse = async () => {
    try {
      const response = await axiosAdmin.post('/addcourses', courseData);
      console.log('Response:', response.data);
      // Handle success, e.g., display a success message
      alert('Course added successfully');
      handleClose(); // Close the modal after successful addition
    } catch (error) {
      console.error('Error adding course:', error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-course-modal-title"
      aria-describedby="add-course-modal-description"
    >
      <ModalContainer>
        <ModalContent>
          <CloseButtonContainer>
            <IconButton onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </CloseButtonContainer>
          <h2 id="add-course-modal-title" className="text-2xl">Add Course</h2>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={courseData.name}
          />
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            onChange={handleChange}
            value={courseData.description}
          />
          <TextField
            name="duration"
            label="Duration"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={courseData.duration}
          />
          <Button variant="contained" color="primary" onClick={handleAddCourse}>
            Add
          </Button>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

export default AddCourseModal;
