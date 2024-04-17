import React from 'react';
import './AdminHeader.css'; // Import CSS file for header styles

function AdminHeader() {
  const handleLogout = () => {
    // Add logout functionality here
    console.log('Logout clicked');
  };

  return (
    <header className="adminheader">
      <div className="logo-container">
        {/* <img src={""} alt="Logo" className="logo" /> */}
        <h1 className="site-name">Studycap</h1>
      </div>
      {/* <button className="logout-button" onClick={handleLogout}>Logout</button> */}
    </header>
  );
}

export default AdminHeader;
