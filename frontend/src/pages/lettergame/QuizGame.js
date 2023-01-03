import React from 'react'
import '../../assets/styles/QuizGame.css'
import Popup from '../../components/Popup'
import { useState, useEffect, useRef } from 'react'
import Caption from '../../components/Caption'
import DefaultButton from '../../components/DefaultButton'
import Question from '../../components/Questionnaire'
import { Link, useParams } from 'react-router-dom';

function Test() {
    const [buttonPopup, setButtonPopup] = useState(false);

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
        <div className='bg'>
            <main>
                {!buttonPopup &&
                <Caption value = {instruction.body}/>
                }
                {!buttonPopup && <DefaultButton className = 'btnBack' value = 'GO BACK TO COURSE' />
                } 
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

export default Test