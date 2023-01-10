import React from 'react'
import '../assets/styles/QuizGame.css'

function Questionnaire(props) {
  return (
    <div className='questionBox'>
        <p className='questionText'>
            {props.value}
        </p>
    </div>
  )
}

export default Questionnaire