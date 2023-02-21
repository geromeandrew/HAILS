import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import '../assets/styles/Course.css'
import Timeline from '../components/Timeline/Timeline';


function Course() {

  let id = 1;
  
  return (
    <>
    <Navbar />
    <div className='course'>
      {/* <Link to={'/quiz-game/' + id} className="qzButton">Quiz</Link> */}
    </div>
    <Timeline />
    </>
  )
}

export default Course;