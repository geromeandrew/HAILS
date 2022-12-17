import React from 'react'
//import Button from './DefaultButton'
import '../assets/styles/popup.css'

function Popup(props) {

  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>BACK</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Popup