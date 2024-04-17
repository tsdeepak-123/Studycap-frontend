import React, { useState, useEffect } from 'react';
import {
  IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Pagination
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link } from 'react-router-dom';
import { axiosAdmin } from '../../../Api/axiosInstance'; // Assuming axiosAdmin is your configured axios instance

function CollegeTable() {
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [collegesPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchColleges = async () => {
    setLoading(true);
    try {
      const response = await axiosAdmin.get('/colleges');
      setColleges(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search term change
  };

  const handleDeleteCollege = async (collegeId) => {
    try {
      await axiosAdmin.patch(`/deletecolleges/${collegeId}`);
      fetchColleges();
    } catch (err) {
      setError(err.message);
    }
  };

  // Pagination calculations
  const indexOfLastCollege = currentPage * collegesPerPage;
  const indexOfFirstCollege = indexOfLastCollege - collegesPerPage;
  const currentColleges = colleges.slice(indexOfFirstCollege, indexOfLastCollege);

  // Filtering colleges based on the search term
  const filteredColleges = currentColleges.filter(college =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(colleges.length / collegesPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="mb-2 mt-8 flex justify-between">
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleChange}
        />
        <Link to="/admin/dashboard/addcollege"> 
          <Button variant="outlined">ADD COLLEGE</Button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Courses</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredColleges.length > 0 ? (
              filteredColleges?.map((college) => (
                <TableRow key={college.id}>
                  <TableCell>{college.name}</TableCell>
                  <TableCell>{college.description}</TableCell>
                  <TableCell>
                    <ul>
                      {college?.courses?.map((course, index) => (
                        <li key={index}>{course.name}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <img style={{ width: "100px", height: "100px" }} src={college.image} alt={college.name} />
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="edit">
                      <FontAwesomeIcon className="text-yellow-500" icon={faEdit} />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDeleteCollege(college._id)}>
                      <FontAwesomeIcon className="text-red-500" icon={faTrash} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No colleges found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {totalPages > 1 && (
          <div className="mt-4 mb-4 flex justify-end mr-4">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              variant="outlined"
              shape="rounded"
              boundaryCount={1}
              siblingCount={0}
              nextIcon={<KeyboardArrowRight />}
              prevIcon={<KeyboardArrowLeft />}
            />
          </div>
        )}
      </TableContainer>
    </div>
  );
}

export default CollegeTable;
