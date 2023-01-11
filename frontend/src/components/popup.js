import React from 'react'
import '../assets/styles/Popup.css'
import { Link } from 'react-router-dom'
import Question from './Questionnaire'

function Popup() {

  return (
    <div className='modal'>
      <Question value = 'L E G _ R D A'/>
      <Link to='/letter-game' className="guess">Guess</Link>
    </div>
  )
}

export default Popup