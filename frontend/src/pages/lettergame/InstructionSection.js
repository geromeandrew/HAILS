import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import Caption from '../../components/Caption'
import LetterGameBackground from '../../components/LetterGameBackground'
import DefaultButton from '../../components/DefaultButton'
import StepCounter from '../../components/StepCounter/StepCounter'

export default function InstructionSection() {
  let { id } = useParams();

  let [instruction, setInstruction] = useState([]);
  useEffect(() => {
    const getInstruction = async () => {
      let response = await fetch(`http://127.0.0.1:8000/api/instruction/${id}/`);
      let data = await response.json()
      setInstruction(data);
    };
    getInstruction();
  }, [id]);
  
  return (
    <div>
        <LetterGameBackground />
        <Caption value = {instruction.body}/>
        <a href='/course'><DefaultButton className = 'btnBack' value = 'GO BACK TO COURSE' type='submit' /></a>
        
        <StepCounter />
    </div>
  )
}
