import React from 'react'
import '../../assets/styles/Test.css'
import Popup from '../../components/popup'
import { useState } from 'react'
import Caption from '../../components/Caption'
import DefaultButton from '../../components/DefaultButton'
import Question from '../../components/Questionnaire'

function Test() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className='bg'>
            <main>
                {!buttonPopup &&
                <Caption value = 'You are now in LRT line 2. Your goal is to go to the last station with the help of sign language. In order to progress and go to the next station guess the missing letter in the next station using sign language.'/>
                }
                {!buttonPopup && <DefaultButton className = 'btnBack' value = 'GO BACK TO COURSE' />
                } 
                {!buttonPopup && <button className='go' onClick={() => setButtonPopup(true)}>GO</button>
                }
            </main>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <Question value = 'LEG_RDA'/>
                <DefaultButton className = 'guess' value = 'GUESS'/>
            </Popup>
        </div>
    )
}

export default Test