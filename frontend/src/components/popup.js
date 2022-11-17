import React from 'react'
import Button from './DefaultButton'
import './popup.css'

function popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>BACK</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default popup