import React, { useState, useEffect } from "react";
import "../../assets/styles/Popup.css";
import { Link, useParams } from "react-router-dom";

import { prediction, resetPrediction } from "./ImageClassify";
import LetterGameBackground from "../../components/LetterGameBackground";
import Confirm from "../../components/Confirm";
import { pk } from "../Lessons/CourseContent";
import { updatePk } from "../Lessons/CourseContent";

function DisplayConfirm() {
  let { id } = useParams();

  let [question, setQuestion] = useState([]);
  let [ans, setAns] = useState([]);

  let answer = "";

  useEffect(() => {
    const getQuestion = async () => {
      let response = await fetch(`http://127.0.0.1:8000/api/question/${id}/`);
      let data = await response.json();
      setQuestion(data);
    };
    getQuestion();
  }, [id, question.body]);

  useEffect(() => {
    const getAnswer = async () => {
      let response = await fetch(`http://127.0.0.1:8000/api/answer/${id}/`);
      let data = await response.json();
      setAns(data);
    };
    getAnswer();
  }, [id, ans.body]);

  const quest = String(question.body);
  const array = quest.split("_");
  const first = array[0];
  const second = array[1];
  answer = first + prediction + second;

  
  return (
    <>
      <LetterGameBackground />
      <div className="modal">
        <Confirm value={answer} />

        {answer === ans.body ? (
          <>
            <Link
              to={pk >= 13 ? "/complete/" : "/quiz-game/" + (pk + 1)}
            >
              <button
                onClick={() => {
                  updatePk(pk + 1);
                  console.log("click" + pk);
                  resetPrediction("");
                }} className="guess"
              >
                Confirm
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/try-again/" + pk} >
              <button className="guess">
                Confirm
              </button>
            </Link>
            
          </>
        )}
      </div>
    </>
  );
}

export default DisplayConfirm;
