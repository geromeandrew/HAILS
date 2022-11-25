import React from 'react'
import '../assets/styles/LetterGameBackground.css'

// background component
const LetterGameBackground = (props) => {
  return (
    <div className='lettergame_bg'>
        {props.contents}
    </div>
  )
}

export default LetterGameBackground