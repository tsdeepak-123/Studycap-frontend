import React, { useState, useEffect } from 'react';
import './Video.css'; // Import your CSS file
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Video() {
  const videos = [
    'https://www.instagram.com/reel/CwAk48khwYz/?igsh=MzRlODBiNWFlZA==',
  ];

  // State to manage the current video index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to handle next video
  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextVideo();
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-container">
      <video
        className="video-player"
        controls
        autoPlay
        muted
        src={videos[currentVideoIndex]}
      />
    </div>
  );
}

export default Video;
