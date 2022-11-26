import React from 'react'
import Caption from '../../components/Caption'
import LetterGameBackground from '../../components/LetterGameBackground'
import DefaultButton from '../../components/DefaultButton'
export default function InstructionSection() {
  return (
    <div>
        <LetterGameBackground />
        <Caption value = 'You are now in LRT line 2. Your goal is to go to the last station with the help of sign language. In order to progress and go to the next station guess the missing letter in the next station using sign language.'/>
        <form action='/course'><DefaultButton className = 'btnBack' value = 'GO BACK TO COURSE' type='submit' /></form>
    </div>
    
  )
}
