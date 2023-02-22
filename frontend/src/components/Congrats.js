import React from 'react'
import medal from '../assets/images/medal.svg'

function Congrats() {
  return (
    <div className='div-congrats'>
        <img src={medal} />
        <h2>Congratulations</h2>
        <p>You did great during the lesson.</p>
        <button className='start-learning'>FINISH</button>
    </div>
  )
}

export default Congrats