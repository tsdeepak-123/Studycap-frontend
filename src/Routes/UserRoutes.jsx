import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UserHome from '../Pages/User/UserHome'
import AboutUs from '../Pages/User/AboutUs/AboutUs'
import OurServices from '../Pages/User/Services/OurServices'
import Portfolio from '../Pages/User/Gallery/PortFolio'
import Contact from '../Pages/User/ContactUs/Contact'
import Career from '../Pages/User/Career/Career'

function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserHome/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/services' element={<OurServices/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/career' element={<Career/>}/>
      </Routes>
    </div>
  )
}

export default UserRoutes