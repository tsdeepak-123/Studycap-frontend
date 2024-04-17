// Sidebar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUniversity, faSchool, faBook, faHome, faSignOutAlt ,faCog,faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { AdminAction } from '../../../Stores/AdminAuth';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [cookies, setCookies, removeCookies] = useCookies(['AdminsecretKey']);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    removeCookies('AdminsecretKey');
    dispatch(AdminAction.AdminLogout());
    navigate('/admin');
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="toggle-icon" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} /> {/* Use faTimes when sidebar is open */}
      </div>
      <h2 style={{ display: isSidebarOpen ? 'block' : 'none' }}>Admin Dashboard</h2>
      <ul>
        {isSidebarOpen ? (
          <>
            <li><Link to="/admin/dashboard"><FontAwesomeIcon icon={faHome} /> Dashboard</Link></li>
            <li><Link to="colleges"><FontAwesomeIcon icon={faSchool} /> Colleges</Link></li>
            <li><Link to="universities"><FontAwesomeIcon icon={faUniversity} /> Universities</Link></li>
            <li><Link to="courses"><FontAwesomeIcon icon={faBook} /> Courses</Link></li>
            <li><Link to="home-management"><FontAwesomeIcon icon={faCog} /> Home Management</Link></li>
            <li><Link to="enquiry"><FontAwesomeIcon icon={faUserGraduate} />Enquiry Details</Link></li>
            <li><a onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a></li>
            {/* Add more sidebar items as needed */}
          </>
        ) : (
          <>
            <li><Link to="colleges"><FontAwesomeIcon icon={faSchool} /></Link></li>
            <li><Link to="universities"><FontAwesomeIcon icon={faUniversity} /></Link></li>
            <li><Link to="courses"><FontAwesomeIcon icon={faBook} /></Link></li>
            <li><Link to="home-management"><FontAwesomeIcon icon={faCog} /></Link></li>
            <li><Link to="enquiry"><FontAwesomeIcon icon={faUserGraduate} /></Link></li>
            <li><a href="/" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /></a></li>
            {/* Add more sidebar items as needed */}
          </>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
