import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/AdminComponents/Login/Login";
import Dashboard from "../Pages/Admin/Dashboard";
import CollegeTable from "../components/AdminComponents/College/CollegeTable";
import AddCollege from "../components/AdminComponents/College/AddCollege";
import University from "../components/AdminComponents/University/University";
import Course from "../components/AdminComponents/Course/Course";
import Banner from "../components/AdminComponents/Banner/Banner";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { AdminAction } from "../Stores/AdminAuth";
import Enquiry from "../components/AdminComponents/Enquiry/Enquiry";

function AdminRoutes() {
  const [cookies, setCookies] = useCookies(['AdminsecretKey']);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(cookies).length > 0) {
      dispatch(AdminAction.AddAdmin({ token: cookies?.AdminsecretKey }));
    }
  }, [dispatch]);

  const adminToken = useSelector((state) => state?.Admin?.AdminToken);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={adminToken?<Dashboard/>:<Login/>}>
        <Route path="colleges" element={adminToken?<CollegeTable />:<Login/>} />
        <Route path="universities" element={adminToken?<University />:<Login/>} />
        <Route path="addcollege" element={adminToken?<AddCollege />:<Login/>} />
        <Route path="courses" element={adminToken?<Course />:<Login/>} />
        <Route path="home-management" element={adminToken?<Banner />:<Login/>} />
        <Route path="enquiry" element={adminToken?<Enquiry/>:<Login/>} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
