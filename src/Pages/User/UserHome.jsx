import React from 'react'
import Footer from '../../components/UserComponents/Footer/Footer'
import Home from '../../components/UserComponents/Home/Home'
import Colleges from '../../components/UserComponents/Colleges/Colleges'
import Question from '../../components/UserComponents/Questions/Question'


function UserHome() {
  return (
    <div className='overflow-hidden'>
        <Home/>
        <Colleges/>
        <Question/>
        <Footer/>
    </div>
  )
}

export default UserHome