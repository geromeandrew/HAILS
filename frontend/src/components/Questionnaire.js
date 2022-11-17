import React from 'react'

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