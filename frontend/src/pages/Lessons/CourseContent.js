import React from 'react'
import charactergroup from '../../assets/images/character-group.png'
import imageA from '../../assets/images/character-2.svg'
import imageB from '../../assets/images/character-1.svg'
import imageC from '../../assets/images/character-4.svg'
import imageD from '../../assets/images/character-3.svg'
import imageE from '../../assets/images/character-hi.svg'
import vowels from '../../assets/images/img-vowels.jpeg'
import iconcam from '../../assets/images/icon-cam.svg'

import { Link } from 'react-router-dom';

function CourseContent({ course, handleCourseClick }) {
    let id =1;
    
    if (course === "default") {
        return (
          <div className='course-content'>
            <h1>Course</h1>
            <h2 className='course-sub-title'>Welcome to HAILS!</h2>
            <img src= {charactergroup} />
            <p>Welcome to our website for learning American Sign Language ASL using machine learning technology!
                Our site provides an interactive and engaging platform for anyone interested in learning ASL,
                from beginners to advanced users.
            </p><br />
            <p>
                With the help of our cutting-edge machine learning model, you will be able to learn sign language
                through a more immersive and interactive experience, all at your own pace. Our model is designed to
                help you learn ASL through practical, real-world scenarios that will help you build a solid foundation
                in this valuable skill.
            </p><br />
            <p>
                Our program is suitable for individuals of all ages, backgrounds, and skill levels. Whether you are looking
                to learn ASL for personal reasons or as a tool for professional communication, we have the resources you need
                to get started.
            </p>
            <img className='icon-cam' src= {iconcam} />
            <p className='cam-info'>This application will need you to open your camera</p>
            <button onClick = {() => handleCourseClick("course-1")} className='start-learning'>START LEARNING</button>
          </div>
        );
      } else if (course === "course-1") {
        return (
          <div className='course-content'>
            <h1>Course</h1>
            <h2 className='course-sub-title'>Lesson 1: Introduction</h2>
            <img src= {imageA} />
            <p>
                In American Sign Language ASL, we use the 5 Parameters of ASL to describe how a sign behaves within the signers space. 
            </p><br />
            <p>
                The parameters are handshape, palm orientation, movement, location, and expression/non-manual signals.
                All five parameters must be performed correctly to sign the word accurately. 
            </p><br/>
            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/FrkGrIiAoNE" title="5 Parameters of ASL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br/><br/>
            <p>
                <b>Handshape:</b> This refers to the shape of the hand and fingers when forming a sign.
                ASL has a set of distinct handshapes that are used to form signs, and each sign
                is associated with a specific handshape.
            </p><br />
            <p>
                <b>Movement: </b>This refers to the movement of the hands and arms when forming a sign.
                ASL signs can be static or dynamic, and movements can vary in speed, direction, and distance.
            </p>
            <p>
                <b>Orientation: </b>This refers to the orientation or direction of the hand and fingers when forming a sign.
                ASL has different hand orientations that can change the meaning of a sign.
            </p>
            <p>
                <b>Location: </b>This refers to where on the body or in space a sign is made.
                Signs can be made in front of the body, on the body, or in different locations in space around the body.
            </p>
            <p>
                <b>Non-manual markers: </b>This refers to the use of facial expressions, head movements, and body language in ASL.
                These non-manual markers are an essential part of ASL and can change the meaning and tone of a sign. For example,
                raising your eyebrows can change a statement into a question.
            </p>
            <button onClick = {() => handleCourseClick("course-2")} className='start-learning'>NEXT</button>
            {/* <Link to={'/quiz-game/' + id} className = 'start-link'><button className='start-learning'>START GAME</button></Link> */}
            {/* <a className='start-link' href='/quiz-game/' + id' ><button className='start-learning'>START GAME</button></a> */}
          </div>
        );
      } else if (course === "course-2") {
        return (
          <div className='course-content'>
            <h1>Course</h1>
            <h2 className='course-sub-title'>Lesson 2: Let's Talk About Letters (Vowels)</h2>
            <img src= {imageE} />
            <p>
              Before anything else, watch first the video about signing vowels
            </p><br />
            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/4FvzEgUFcVQ" title="Learn vowels ASL | Johana Bonilla" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br/><br/>
            <img src= {vowels} />
            <p>
              In ASL, there are five primary vowels: A, E, I, O, and U.
              Each vowel is represented by a distinct handshape,
              and the movement and location of the handshape help to indicate the specific vowel.
            </p><br />
            <p>
              Here are the handshapes and techniques used to sign each vowel:
            </p><br />
            <p>
                <b>A:</b> To sign the vowel A, hold your hand in a loose fist with your thumb on top.
                Place your fist in front of your mouth and open your hand slightly, as if you were about to yawn.
                This handshape should be held in front of your mouth, near your chin.
            </p><br />
            <p>
                <b>E: </b>To sign the vowel E, hold your hand in a loose fist and extend your index and middle fingers.
                Place your hand in front of your mouth and open your fingers slightly, as if you were saying the letter "e."
                This handshape should be held in front of your mouth, near your lips.
            </p><br />
            <p>
                <b>I: </b>To sign the vowel I, hold your hand in a loose fist and extend your pinky and index fingers.
                Place your hand in front of your mouth and open your fingers slightly, as if you were saying the letter "i."
                This handshape should be held in front of your mouth, near your nose.
            </p><br />
            <p>
                <b>O: </b>To sign the vowel O, hold your hand in a loose fist and extend your thumb, index, and middle fingers.
                Place your hand in front of your mouth and make a circular shape with your fingers, as if you were about to whistle.
                This handshape should be held in front of your mouth, near your lips.
            </p><br />
            <p>
                <b>U: </b>To sign the vowel U, hold your hand in a loose fist and extend your index and pinky fingers.
                Place your hand in front of your mouth and make a U-shape with your fingers, as if you were saying the letter "u."
                This handshape should be held in front of your mouth, near your chin.
            </p><br />
            {/* <button onClick = {() => handleCourseClick("course-2")} className='start-learning'>NEXT</button> */}
            <Link to={'/quiz-game/' + id} className = 'start-link'><button className='start-learning'>START GAME</button></Link>
            {/* <a className='start-link' href='/quiz-game/' + id' ><button className='start-learning'>START GAME</button></a> */}
          </div>
        );
      } else if (course === "course-3") {
        return (
          <div className='course-content'>
            <h1>Course</h1>
            <h2 className='course-sub-title'>Lesson 3: Let's Talk About Letters (Consonants)</h2>
            <img src= {imageD} />
            <p>Welcome to our website for learning American Sign Language ASL using machine learning technology!
                Unfortunately our website is still in development.
            </p><br />
            <p><b>We, the developers are working hard on providing the best contents for you in the future. Thank You!</b>
            </p><br />
          </div>
        );
      } else if (course === "course-4") {
        return (
          <div className='course-content'>
            <h2>Science Course Content</h2>
            <p>Here is the content for the science course.</p>
          </div>
        );
      } else if (course === "course-5") {
        return (
          <div className='course-content'>
            <h2>English Course Content</h2>
            <p>Here is the content for the English course.</p>
          </div>
        );
      } else if (course === "course-6") {
        return (
          <div className='course-content'>
            <h2>Science Course Content</h2>
            <p>Here is the content for the science course.</p>
          </div>
        );
      } else if (course === "course-7") {
        return (
          <div className='course-content'>
            <h2>English Course Content</h2>
            <p>Here is the content for the English course.</p>
          </div>
        );
      } else if (course === "course-8") {
        return (
          <div className='course-content'>
            <h2>Science Course Content</h2>
            <p>Here is the content for the science course.</p>
          </div>
        );
      } else if (course === "course-9") {
        return (
          <div className='course-content'>
            <h2>Science Course Content</h2>
            <p>Here is the content for the science course.</p>
          </div>
        );
      } else {
        return (
          <div className='course-content'>
            <h2>No course selected</h2>
            <p>Please select a course to see the content.</p>
          </div>
        );
      }
}

export default CourseContent