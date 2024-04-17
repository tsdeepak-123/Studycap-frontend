import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import './DetailsForm.css'; 
import { axiosUser } from '../../../Api/axiosInstance'; 

function DetailsForm({ onSubmit }) {
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
      alert('Failed to submit details');
    }
  };

  return (
    <div className="form-container">
      <Typography variant="h6" gutterBottom>
      </Typography>
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
              Submit Details
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default DetailsForm;
