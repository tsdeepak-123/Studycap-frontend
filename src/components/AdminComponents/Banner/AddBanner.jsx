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

function AddBannerModal({ open, handleClose }) {
  const [bannerData, setBannerData] = useState({
    name: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    if (type === 'file') {
      setBannerData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setBannerData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', bannerData.name);
    if (bannerData.image) {
      formData.append('image', bannerData.image);
    }

    try {
        const response = await axiosAdmin.post('/addbanner', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Banner added successfully');
        setBannerData({ name: "", image: null });
        handleClose();
    } catch (error) {
        console.error("Error adding banner:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-banner-modal-title"
      aria-describedby="add-banner-modal-description"
    >
      <ModalContainer>
        <ModalContent>
          <CloseButtonContainer>
            <IconButton onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </CloseButtonContainer>
          <h2 id="add-banner-modal-title">Add Banner</h2>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={bannerData.name}
            onChange={handleChange}
          />
          <input
            name="image"
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

export default AddBannerModal;
