import React from 'react'
import Congrats from '../../components/Congrats';
import Backdrop from '../../components/Backdrop';
import LetterGameBackground from '../../components/LetterGameBackground';

function Complete() {
  return (
    <div>
        <LetterGameBackground/>
        <Backdrop/>
        <Congrats/>
    </div>
  )
}

export default Complete