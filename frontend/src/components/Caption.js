import React from 'react'

function Caption(props) {
  return (
    <div className='captionBox'>
        <p className='captionText'>
            {props.value}
        </p>
    </div>
  )
}

export default Caption