import { useState } from 'react';
import { styled } from "@mui/system";
import { Modal, IconButton, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { axiosAdmin } from '../../../Api/axiosInstance';

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

function AddUniversityModal({ open, handleClose }) {
  const [universityData, setUniversityData] = useState({
    name: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    if (type === 'file') {
      setUniversityData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setUniversityData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', universityData.name);
    formData.append('description', universityData.description);
    if (universityData.image) {
      formData.append('logo', universityData.image);
    }

    try {
        const response = await axiosAdmin.post('/adduniversities', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('University added successfully');
        setUniversityData({ name: "", description: "", image: null });
        handleClose();
    } catch (error) {
        console.error("Error adding university:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-university-modal-title"
      aria-describedby="add-university-modal-description"
    >
      <ModalContainer>
        <ModalContent>
          <CloseButtonContainer>
            <IconButton onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </CloseButtonContainer>
          <h2 id="add-university-modal-title">Add University</h2>
          <TextField
            name="name" // Added name attribute
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={universityData.name}
            onChange={handleChange}
          />
          <TextField
            name="description" // Added name attribute
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={universityData.description}
            onChange={handleChange}
          />
          <input
            name="image" // Added name attribute
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add
          </Button>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

export default AddUniversityModal;
