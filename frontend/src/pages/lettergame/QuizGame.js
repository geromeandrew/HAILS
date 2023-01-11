import React from 'react'
import '../../assets/styles/QuizGame.css'
import Popup from '../../components/Popup'
import { useState} from 'react'
import Caption from '../../components/Caption'
import DefaultButton from '../../components/DefaultButton'
import Backdrop from '../../components/Backdrop'
import Question from '../../components/Questionnaire'
import { Link } from 'react-router-dom';
import StepCounter from '../../components/StepCounter/StepCounter'

function QuizGame() {
    const [buttonPopup, setButtonPopup] = useState(false);

    function deleteHandler() {
        setButtonPopup(true);
    }

    function closeModalHandler () {
        setButtonPopup(false);
    }

    return (
        <div className='bg'>
            <main>
                {!buttonPopup &&
                <Caption value = 'You are now in LRT line 2. Your goal is to go to the last station with the help of sign language. In order to progress and go to the next station guess the missing letter in the next station using sign language.'/>
                }
                {!buttonPopup && <a href='/course'><DefaultButton className = 'btnBack' value = 'GO BACK TO COURSE' type='submit' /></a>
                }
                <StepCounter /> 
                {!buttonPopup && <button className='go' onClick={deleteHandler}>GO</button>
                }
            </main>
            <div>
                {buttonPopup && <Popup/>}
                {buttonPopup && <Backdrop onCancel={closeModalHandler} />}
            </div>
        </div>
    )
}

export default QuizGame;