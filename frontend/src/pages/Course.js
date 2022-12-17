import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import '../assets/styles/Course.css'

function Course() {
  return (
    <>
    <Navbar />
    <div className='course'>
      <h1>Course</h1>
      <Link to='/quiz-game' className="qzButton">Quiz</Link>
    </div>
    </>
  )
}

export default Course;