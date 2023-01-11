import React, { useState } from 'react'
import '../../assets/styles/Timeline.css'
import CourseCard from './CourseCard'
import imageA from '../../assets/images/character-2.svg'
import imageB from '../../assets/images/character-1.svg'
import imageC from '../../assets/images/character-4.svg'
import imageD from '../../assets/images/character-3.svg'
// import CourseDefault from '../../pages/Lessons/CourseDefault'
// import Course1 from '../../pages/Lessons/Course1'
// import Course2 from '../../pages/Lessons/Course2'
// import Course3 from '../../pages/Lessons/Course3'
// import Course4 from '../../pages/Lessons/Course4'
// import Course5 from '../../pages/Lessons/Course5'

export default function Timeline() {

  // const [choice, setChoice] = useState('default');

  return (
    <div>
      {/* <div className='course-div'>
        {choice === 'default' && <CourseDefault />}
        {choice === 'option1' && <Course1 />}
        {choice === 'option2' && <Course2 />}
        {choice === 'option1' && <Course3 />}
        {choice === 'option2' && <Course4 />}
        {choice === 'option1' && <Course5 />}
      </div> */}
      <div className='timeline'>
        <h2>Timeline</h2>
        <h3>Beginner Class</h3>
        <CourseCard image = {imageA} title = 'Lesson 1: Introduction' info = 'In this lesson we will talk about the 5 parameters of ASL...' props = 'card-image-1' />
        <CourseCard image = {imageB} title = 'Lesson 2: Lets start counting!' info = 'In this lesson we will learn how to sign numbers that will be useful in real world scenario...' props = 'card-image-2' />
        <CourseCard image = {imageC} title = 'Lesson 3: Lets talk about letters! (vowels)' info = 'In this lesson we will learn how to use sign language in letters...' props = 'card-image-3' />
        <CourseCard image = {imageD} title = 'Lesson 4: Lesson 4: Lets talk about letters! (consonants)' info = 'In this lesson we will learn how to use sign language in ...' props = 'card-image-4' />
        <h3>Intermediate Class</h3>
        <CourseCard image = {imageA} title = 'Lesson 5: Introduction' info = 'In this lesson we will talk about the introduction to...' props = 'card-image-5'/>
        <CourseCard image = {imageB} title = 'Lesson 6: Greetings and Common words' info = 'In this lesson we will talk about the greetings and...' props = 'card-image-5'/>
        <CourseCard image = {imageC} title = 'Lesson 7: Important Words' info = 'In this lesson we will talk about the important words for...' props = 'card-image-5'/>
        <h3>Advanced</h3>
        <CourseCard image = {imageD} title = 'Lesson 8: Introduction and Recap' info = 'In this lesson we will recap about the...' props = 'card-image-5'/>
        <CourseCard image = {imageA} title = 'Lesson 9: Building Phrases' info = 'In this lesson we will build phrases and...' props = 'card-image-5'/>
        <CourseCard image = {imageB} title = 'Lesson 10: Wrapping it up' info = 'What we have learned so far...' props = 'card-image-5'/>
      </div>
    </div>
    
  )
}
