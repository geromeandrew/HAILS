import React from 'react'
import '../assets/styles/Profile.css'
import * as BsIcons from "react-icons/bi"
import Calendar from '../components/Calendar'
import logo from './logo.png';

function Profile() {
  return (
    <div className='profile'>
        <div className='heading'>
            <h3>Profile</h3>
            <BsIcons.BiEdit size={25}/>
        </div>
        <div className='credentials'>
            <img src={logo} alt="logo"/>
            <h4 className='name'>First Name Last Name</h4>
            <p className='category'>Learner</p>
        </div>
        <div>
            <div className='calendar'><Calendar/></div>
            <span className='course-header'>Course Progress</span>
            <div className='courseProg'>
                <div className='pieChart'>
                </div>
                <div className='text'>
                    <span className='item1'>Let's talk about Numbers</span>
                    <span className='item2'>10 stages</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile