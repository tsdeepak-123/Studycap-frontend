// Dashboard.js
import React from 'react';
import './Dashboard.css';
import Sidebar from '../SideBar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import CollegeTable from '../College/CollegeTable';
import University from '../University/University'
import AddCollege from '../College/AddCollege';
import Course from '../Course/Course';
import AdminHeader from '../Header/AdminHeader';
import Footer from '../Footer/Footer';
import Dashboard from './Dashboard';
import Banner from '../Banner/Banner';
import Enquiry from '../Enquiry/Enquiry';

function Dash() {
  return (
    <div className="dashboard">
      <header className="header">
        <AdminHeader />
      </header>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content-container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="colleges" element={<CollegeTable />} />
            <Route path="addcollege" element={<AddCollege />} />
            <Route path="universities" element={<University />} />
            <Route path="courses" element={<Course />} />
            <Route path="home-management" element={<Banner/>} />
            <Route path="enquiry" element={<Enquiry/>} />
          </Routes>
        </div>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Dash;
