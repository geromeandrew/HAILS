import React from 'react'
import '../../assets/styles/QuizGame.css'
import Popup from '../../components/Popup'
import { useState} from 'react'
import Caption from '../../components/Caption'
import DefaultButton from '../../components/DefaultButton'
import Backdrop from '../../components/Backdrop'
import Question from '../../components/Questionnaire'
import { Link, useParams } from 'react-router-dom';
import StepCounter from '../../components/StepCounter/StepCounter'

function QuizGame() {
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

    let [question, setQuestion] = useState([]);
    useEffect(() => {
        const getQuestion = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/question/${id}/`);
        let data = await response.json()
        setQuestion(data);
        };
        getQuestion();
    }, [id]);
    
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
                <Caption value = {instruction.body}/>
                }
                {!buttonPopup && <a href='/course'><DefaultButton className = 'btnBack' value = 'GO BACK TO COURSE' type='submit' /></a>
                }
                <StepCounter /> 
                {!buttonPopup && <button className='go' onClick={deleteHandler}>GO</button>
                }
            </main>

            <div className='removePopup'>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                
                    <Question value = {question.body}/>
                    <Link to='/letter-game' className="guess">Guess</Link>
                
            </Popup>

            <div>
                {buttonPopup && <Popup/>}
                {buttonPopup && <Backdrop onCancel={closeModalHandler} />}
            </div>
        </div>
    )
}

export default QuizGame;