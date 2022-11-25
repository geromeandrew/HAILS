import React from 'react'
import Button from './DefaultButton'
import '../assets/styles/popup.css'

function popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <Button className='close-btn' onClick={() => props.setTrigger(false)}>BACK</Button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default popup