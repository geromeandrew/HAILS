import React from 'react'
import './LetterGameBackground.css'

const LetterGameBackground = (props) => {
  return (
    <div className='lettergame_bg'>
        {props.contents}
    </div>
  )
}

export default LetterGameBackground