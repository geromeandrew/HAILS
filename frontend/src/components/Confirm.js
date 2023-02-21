import React from 'react'
import '../assets/styles/Popup.css'

function Confirm(props) {
  return (
    <div className='questionBox'>
        <p className='confirmText'>
            {props.value}
        </p>
    </div>
  )
}

export default Confirm