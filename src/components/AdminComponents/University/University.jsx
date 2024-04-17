import React, { useState, useEffect } from 'react';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Pagination } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import AddUniversityModal from "./AddUniversityModal";
import { axiosAdmin } from '../../../Api/axiosInstance'; // Adjust the import path as necessary

function University() {
  const [universities, setUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [universitiesPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUniversities = async () => {
    setLoading(true);
    try {
      const response = await axiosAdmin.get('/universities');
      setUniversities(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search term change
  };

  const indexOfLastUniversity = currentPage * universitiesPerPage;
  const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
  const currentUniversities = universities.slice(indexOfFirstUniversity, indexOfLastUniversity);

  const totalPages = Math.ceil(universities.length / universitiesPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleDeleteUniversity = async (UniversityId) => {
    try {
      await axiosAdmin.patch(`/deleteuniversities/${UniversityId}`);
      fetchUniversities();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <div className="mb-2 mt-8 flex justify-between">
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button onClick={handleOpenModal} variant="outlined">
          ADD UNIVERSITY
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Logo</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentUniversities.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              currentUniversities.map((university) => (
                <TableRow key={university._id}>
                  <TableCell component="th" scope="row">
                    {university.name}
                  </TableCell>
                  <TableCell>{university.description}</TableCell>
                  <TableCell>
                    <img style={{ width: "100px", height: "100px" }} src={university.logo} alt={university.name} />
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="edit">
                      <FontAwesomeIcon className="text-yellow-500" icon={faEdit} />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <FontAwesomeIcon onClick={() => handleDeleteUniversity(university._id)} className="text-red-500" icon={faTrash} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
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
          showFirstButton={false}
          showLastButton={false}
          nextIcon={<KeyboardArrowRight />}
          prevIcon={<KeyboardArrowLeft />}
        />
      </div>
      <AddUniversityModal open={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
  
}

export default University;
