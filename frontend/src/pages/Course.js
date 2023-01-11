import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import '../assets/styles/Course.css'
import Timeline from '../components/Timeline/Timeline';


function Course() {

  return (
    <>
    <Navbar />
    <div className='course'>
      <h1>Course</h1>
      <Link to='/quiz-game' className="qzButton">Quiz</Link>
    </div>
    <Timeline />
    </>
  )
}

export default Course;