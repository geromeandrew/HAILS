import React from 'react'
import '../../assets/styles/Timeline.css'
import char1 from '../../assets/images/character-1.svg'

export default function CourseCard() {


  return (
    <div className='course-card'>
        <div className='card-image'>
            <img alt='lesson 1' src= {char1} />
        </div>
        <div className='card-text'>
            <p className='card-title'>Lesson 1: Introduction</p>
            <p className='card-info'>In this lesson we will talk about the 5 parameters of ASL...</p>
        </div>
    </div>
  )
}
