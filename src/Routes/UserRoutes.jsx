import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UserHome from '../Pages/User/UserHome'
import AboutUs from '../Pages/User/AboutUs/AboutUs'
import OurServices from '../Pages/User/Services/OurServices'
import Contact from '../Pages/User/ContactUs/Contact'
import Career from '../Pages/User/Career/Career'
import CollegeList from '../Pages/User/Colleges/CollegeList'
import SingleView from '../Pages/User/Colleges/SingleView'

function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserHome/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/services' element={<OurServices/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/colleges' element={<CollegeList/>}/>
        <Route path='/collegeview' element={<SingleView/>}/>
      </Routes>
    </div>
  )
}

export default UserRoutes