import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { axiosAdmin } from '../../../Api/axiosInstance';
import CourseDropdown from '../Course/CourseDropdown';
import {useNavigate} from 'react-router-dom'

function AddCollege() {
  const navigate = useNavigate()
  const [collegeData, setCollegeData] = useState({
    name: "",
    description: "",
    courses: "",
    image: null,
    gallery: []
  });

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await axiosAdmin.get('/courses');
        setCourses(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setCollegeData({ ...collegeData, [e.target.name]: e.target.files[0] });
    } else if (e.target.name === 'gallery') {
      setCollegeData({ ...collegeData, [e.target.name]: e.target.files });
    } else {
      setCollegeData({ ...collegeData, [e.target.name]: e.target.value });
    }
  };

  const handleCourseSelection = (selectedCourses) => {
    setCollegeData({ ...collegeData, courses: selectedCourses });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', collegeData.name);
      formData.append('description', collegeData.description);
      formData.append('courses', collegeData.courses);
      formData.append('image', collegeData.image);
      for (let i = 0; i < collegeData.gallery.length; i++) {
        formData.append('gallery', collegeData.gallery[i]);
      }

      const response = await axiosAdmin.post('/addcolleges', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Response:', response.data);
      alert('college added')
      navigate('/admin/dashboard/colleges')
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px' }}>
      <Card sx={{ minWidth: 400, maxWidth: 800 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Add New College
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{ '& .MuiTextField-root': { mb: 2, width: '100%' } }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="College Name"
                  onChange={handleChange}
                  value={collegeData.name}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="description"
                  name="description"
                  label="Description"
                  onChange={handleChange}
                  value={collegeData.description}
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                {/* Render CourseDropdown component */}
                {loading ? (
                  <div>Loading courses...</div>
                ) : error ? (
                  <div>Error: {error}</div>
                ) : (
                  <CourseDropdown  courses={courses} selectedCourses={collegeData.courses} setSelectedCourses={handleCourseSelection} />
                )}
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  id="gallery"
                  name="gallery"
                  multiple
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, width: '100%' }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AddCollege;
