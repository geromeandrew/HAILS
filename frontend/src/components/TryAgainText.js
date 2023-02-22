import React from 'react'
import '../assets/styles/Popup.css'

function TryAgainText(props) {
  return (
    <div className='questionBox'>
        <p className='tryagainText'>
            {props.value}
        </p>
    </div>
  )
}

export default TryAgainText