import React, {useState, useEffect} from 'react'
import '../assets/styles/Popup.css'
import { Link, useParams } from 'react-router-dom'
import Question from './Questionnaire'

function Popup() {

  let { id } = useParams();

  let [question, setQuestion] = useState([]);
    useEffect(() => {
        const getQuestion = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/question/${id}/`);
        let data = await response.json()
        setQuestion(data);
        };
        getQuestion();
    }, [id]);

  return (
    <div className='modal'>
      <Question value = {question.body}/>
      <Link to='/letter-game' className="guess">Guess</Link>
    </div>
  )
}

export default Popup