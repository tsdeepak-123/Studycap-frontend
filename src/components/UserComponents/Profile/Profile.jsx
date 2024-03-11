// Profile.jsx

import React from "react";
import "./Profile.css"; // Import the CSS file

function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="profile-container">
        <div className="profile-info">
          <img
            src="/Images/saneed.png"
            alt="Nitheesh Kavumpuram - Founder"
            className="profile-image"
          />
          <div className="profile-text">
            <h1 className="profile-name">SANEED KHADER</h1>
            <p className="profile-title">Founder, KAAF Events</p>
          </div>
        </div>
        <p className="profile-description">
          Hello, I'm Saneed Khader, the creative mind behind KAAF Events. With a
          passion for event design, I've orchestrated countless memorable events
          in Calicut and beyond. Now, I'm excited to bring my expertise to your
          special occasions.
          <br />
          <br />
          As a detail-oriented event designer, I thrive on transforming spaces
          into enchanting settings that reflect your unique style and vision.
          From weddings to corporate functions, I'm committed to making your
          event truly unforgettable. Let's collaborate and bring your dream
          event to life!
        </p>
      </div>
    </div>
  );
}

export default Profile;
