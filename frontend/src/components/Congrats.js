import React from 'react'
import medal from '../assets/images/medal.svg'
import { useNavigate } from "react-router-dom";

function Congrats() {
  const navigate = useNavigate();

  return (
    <div className='div-congrats'>
        <img src={medal} alt='medal' />
        <h2>Congratulations</h2>
        <p>You did great during the lesson.</p>
        <button onClick={() => navigate("/course")} className='start-learning'>FINISH</button>
    </div>
  )
}

export default Congrats