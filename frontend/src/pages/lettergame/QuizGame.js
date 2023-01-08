import React from 'react'
import '../../assets/styles/QuizGame.css'
import Popup from '../../components/Popup'
import { useState, useEffect, useRef } from 'react'
import Caption from '../../components/Caption'
import DefaultButton from '../../components/DefaultButton'
import Question from '../../components/Questionnaire'
import { Link } from 'react-router-dom';
import StepCounter from '../../components/StepCounter/StepCounter'

function QuizGame() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className='bg'>
            <main>
                {!buttonPopup &&
                <Caption value = 'You are now in LRT line 2. Your goal is to go to the last station with the help of sign language. In order to progress and go to the next station guess the missing letter in the next station using sign language.'/>
                }
                {!buttonPopup && <a href='/course'><DefaultButton className = 'btnBack' value = 'GO BACK TO COURSE' type='submit' /></a>
                }
                <StepCounter /> 
                {!buttonPopup && <button className='go' onClick={() => setButtonPopup(true)}>GO</button>
                }
            </main>
            <div className='removePopup'>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                
                    <Question value = 'L E G _ R D A'/>
                    <Link to='/letter-game' className="guess">Guess</Link>
                
            </Popup>
            </div>
        </div>
    )
}

export default QuizGame;