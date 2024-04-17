import React, { useState, useEffect } from 'react';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import AddBanner from "../Banner/AddBanner"; // Adjust the path as necessary
import { axiosAdmin } from '../../../Api/axiosInstance'; // Adjust the path as necessary

function Banner() {
  const [banners, setBanners] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBanners = async () => {
    try {
      const response = await axiosAdmin.get('findbanner');
        setBanners(response.data.allBannerData);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDeleteBanner = async (bannerId) => {
    try {
      await axiosAdmin.patch(`/deletebanner/${bannerId}`);
      fetchBanners();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="mb-2 mt-8 flex justify-between">
        <Button onClick={handleOpenModal} variant="outlined">
          ADD BANNER
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {banners.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              banners.map((banner) => (
                <TableRow key={banner._id}>
                  <TableCell component="th" scope="row">
                    {banner.name}
                  </TableCell>
                  <TableCell>
                    <img style={{ width: "100px", height: "100px" }} src={banner.photo} alt={banner.name} /> 
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="edit">
                      <FontAwesomeIcon className="text-yellow-500" icon={faEdit} />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDeleteBanner(banner._id)}>
                      <FontAwesomeIcon className="text-red-500" icon={faTrash} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <AddBanner open={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
}

export default Banner;
