import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Pagination,
  IconButton
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { axiosAdmin } from '../../../Api/axiosInstance'; // Assuming axiosAdmin is your configured axios instance

function Enquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [enquiriesPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const response = await axiosAdmin.get('/details');
      setEnquiries(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); 
  };

  // Pagination calculations
  const indexOfLastEnquiry = currentPage * enquiriesPerPage;
  const indexOfFirstEnquiry = indexOfLastEnquiry - enquiriesPerPage;
  const currentEnquiries = enquiries.slice(indexOfFirstEnquiry, indexOfLastEnquiry);

  // Filtering enquiries based on the search term
  const filteredEnquiries = currentEnquiries.filter(enquiry =>
    Object.values(enquiry).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(enquiries.length / enquiriesPerPage);

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
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Course in mind</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEnquiries.length > 0 ? (
              filteredEnquiries.map((enquiry) => (
                <TableRow key={enquiry.id}>
                  <TableCell>{enquiry.name}</TableCell>
                  <TableCell>{enquiry.age}</TableCell>
                  <TableCell>{enquiry.courseInMind}</TableCell>
                  <TableCell>{enquiry.email}</TableCell>
                  <TableCell>{enquiry.phoneNumber}</TableCell>
                  <TableCell>{enquiry.message}</TableCell>
                  <TableCell>
                    <IconButton aria-label="delete" onClick={"() => handleDeleteEnquiry(enquiry._id)"}>
                      <FontAwesomeIcon className="text-red-500" icon={faTrash} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No enquiries found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {/* Pagination */}
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

export default Enquiry;
