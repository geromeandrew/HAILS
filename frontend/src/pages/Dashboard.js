import React from 'react'
import Navbar from '../components/Navbar';
import Profile from '../components/Profile'
import '../assets/styles/Dashboard.css'
import Cartoon from '../assets/images/1.png'
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className='header'>
        <h2>Hi, First Name Last Name</h2>
        <h4>Welcome, nice to see you!</h4>
      </div>
      <div className='container'>
        <div className='activity'>
          <div><h2>Continue Where You Left Off</h2></div>
          <div className='navigate_box'>
            <img src={Cartoon} alt='cartoon'/>
            <div className='navigate'>
              <p className='item1'>Let's talk about numbers</p>
              <p className='item2'>10 stages</p>
              <button onClick={() => navigate("/course")} className='continue_btn'>{'>'}</button>
            </div>
          </div>
        </div>
      </div>
      <div className='course-outline'>
        <p className='courseHeader'>Course Outline</p>
        <div className='box'>
          <div className='box1'>
            <p className='item1'>Beginner</p>
            <p className='item2'>4 parts</p>
          </div>
          <div className='box2'>
            <p className='item1'>Intermediate</p>
            <p className='item2'>3 parts</p>
          </div>
          <div className='box3'>
            <p className='item1'>Advanced</p>
            <p className='item2'>4 parts</p>
          </div>
        </div>
      </div>
    </div>
    <Profile/>
    </>
  )
}

export default Dashboard;