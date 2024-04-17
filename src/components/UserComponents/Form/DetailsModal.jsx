import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import './DetailsModal.css'; 
import { axiosUser } from '../../../Api/axiosInstance';
function DetailsModal({ isOpen, closeModal }) {
  const [details, setDetails] = useState({
    name: '',  
    age: '',
    email: '',
    phoneNumber: '',
    courseInMind: '',
    location: '',
    message: ''
  });

  const handleChange = (prop) => (event) => {
    setDetails({ ...details, [prop]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosUser.post('/addetails', details);
      console.log('Response:', response.data);
      alert('Details submitted successfully');
      closeModal(); 
      setDetails({
        name: '',
        age: '',
        email: '',
        phoneNumber: '',
        courseInMind: '',
        location: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to add details');
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      value={details.name}
                      onChange={handleChange('name')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Age"
                      type="number"
                      variant="outlined"
                      fullWidth
                      value={details.age}
                      onChange={handleChange('age')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      value={details.email}
                      onChange={handleChange('email')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      value={details.phoneNumber}
                      onChange={handleChange('phoneNumber')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Course in Mind"
                      variant="outlined"
                      fullWidth
                      value={details.courseInMind}
                      onChange={handleChange('courseInMind')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Location"
                      variant="outlined"
                      fullWidth
                      value={details.location}
                      onChange={handleChange('location')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      value={details.message}
                      onChange={handleChange('message')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Talk to Experts
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailsModal;
