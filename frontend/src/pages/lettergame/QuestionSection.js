import React from 'react'
import Question from '../../components/Questionnaire'
import LetterGameBackground from '../../components/LetterGameBackground'
import DefaultButton from '../../components/DefaultButton'



export default function QuestionSection() {
  return (
    <div>
      <LetterGameBackground />
      <Question value = 'LEG_RDA'/>
      <DefaultButton className = 'btnBack' value = 'BACK' />
      <DefaultButton className = 'guess' value = 'GUESS'/>
    </div>
    
  )
}