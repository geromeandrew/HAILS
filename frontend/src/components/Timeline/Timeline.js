import React, { useState } from 'react'
import '../../assets/styles/Timeline.css'
import CourseCard from './CourseCard'
import imageA from '../../assets/images/character-2.svg'
import imageB from '../../assets/images/character-1.svg'
import imageC from '../../assets/images/character-4.svg'
import imageD from '../../assets/images/character-3.svg'
import imageE from '../../assets/images/character-group.svg'
import CourseContent from '../../pages/Lessons/CourseContent'
// import CourseDefault from '../../pages/Lessons/CourseDefault'
// import Course1 from '../../pages/Lessons/Course1'
// import Course2 from '../../pages/Lessons/Course2'
// import Course3 from '../../pages/Lessons/Course3'
// import Course4 from '../../pages/Lessons/Course4'
// import Course5 from '../../pages/Lessons/Course5'

export default function Timeline() {

  const [selectedCourse, setSelectedCourse] = useState('default');

  function handleCourseClick(course) {
    setSelectedCourse(course);
  }

  const setActive = (course) => {
    return course === selectedCourse ? { color: '#fff', backgroundColor: '#7F9CF5' } : {};
  }

  return (
    <div>
      <div className='timeline'>
        <h2>Timeline</h2>
        <h3>Beginner Class</h3>
        <ul>
          <li onClick={() => handleCourseClick("default")} style={setActive('default')}>
            <CourseCard image = {imageE} title = 'Before anything else' info = 'Welcome to HAILS!...' props = 'card-image-1' />
          </li>
          <li onClick={() => handleCourseClick("course-1")} style={setActive('course-1')}>
            <CourseCard image = {imageA} title = 'Lesson 1: Introduction' info = 'In this lesson we will talk about the 5 parameters of ASL...' props = 'card-image-1' />
          </li>
          <li onClick={() => handleCourseClick("course-2")} style={setActive('course-2')}>
            <CourseCard image = {imageC} title = 'Lesson 2: Lets talk about letters! (vowels)' info = 'In this lesson we will learn how to use sign language in letters...' props = 'card-image-3' />
          </li>
          <li className='course-not-available'>
            <CourseCard image = {imageD} title = 'Lesson 3: Lets talk about letters! (consonants)' info = 'In this lesson we will learn how to use sign language in ...' props = 'card-image-4' />
          </li>
          <li className='course-not-available'>
            <CourseCard image = {imageB} title = 'Lesson 4: Lets start counting!' info = 'In this lesson we will learn how to sign numbers that will be useful in real world scenario...' props = 'card-image-2' />
          </li>
          <h3>Intermediate Class</h3>
          <li className='course-not-available'>
            <CourseCard image = {imageA} title = 'Lesson 5: Introduction' info = 'In this lesson we will talk about the introduction to...' props = 'card-image-5'/>
          </li>
          <li className='course-not-available'>
            <CourseCard image = {imageB} title = 'Lesson 6: Greetings and Common words' info = 'In this lesson we will talk about the greetings and...' props = 'card-image-5'/>
          </li>
          <li className='course-not-available'>
            <CourseCard image = {imageC} title = 'Lesson 7: Important Words' info = 'In this lesson we will talk about the important words for...' props = 'card-image-5'/>
          </li>
          <h3>Advanced</h3>
          <li className='course-not-available'>
            <CourseCard image = {imageD} title = 'Lesson 8: Introduction and Recap' info = 'In this lesson we will recap about the...' props = 'card-image-5'/>
          </li>
          <li className='course-not-available'>
            <CourseCard image = {imageA} title = 'Lesson 9: Building Phrases' info = 'In this lesson we will build phrases and...' props = 'card-image-5'/>
          </li>
          <li className='course-not-available'>
            <CourseCard image = {imageB} title = 'Lesson 10: Wrapping it up' info = 'What we have learned so far...' props = 'card-image-5'/>
          </li>
        </ul>
      </div>
      <div className='course-content-container'>
        <CourseContent course={selectedCourse} handleCourseClick={handleCourseClick}/>
      </div>
    </div>
    
  )
}
