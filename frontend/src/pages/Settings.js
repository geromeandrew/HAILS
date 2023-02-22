import React from 'react'
import Congrats from '../components/Congrats';

import Navbar from '../components/Navbar';

function Statistics() {
  return (
    <>
    <Navbar />
    <div className='settings'>
      <h1>Settings</h1>
    </div>
    <Congrats />
    </>
  )
}

export default Statistics;