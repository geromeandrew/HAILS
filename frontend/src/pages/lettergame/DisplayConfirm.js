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

  let answer = "";

  useEffect(() => {
    const getQuestion = async () => {
      let response = await fetch(`http://127.0.0.1:8000/api/question/${id}/`);
      let data = await response.json();
      setQuestion(data);
    };
    getQuestion();
  }, [id, question.body]);

  const quest = String(question.body);
  const array = quest.split("_");
  const first = array[0];
  const second = array[1];
  answer = first + prediction + second;

  return (
    <>
      {/* {(() => {
        if (answer === "R E C T O") {
          updatePk(pk + 1);
          console.log(pk);
        }
      })()} */}
      <LetterGameBackground />
      <div className="modal">
        <Confirm value={answer} />
        {answer === "R E C T O" ? (
          <>
            <button
              onClick={() => {
                updatePk(pk + 1);
                console.log("click" + pk);
                resetPrediction("");
              }}
            >
              <Link to={"/quiz-game/" + (pk + 1)} className="guess">
                Confirm
              </Link>
            </button>
          </>
        ) : (
          <>
            <button>
              <Link to={"/try-again/" + pk} className="guess">
                Confirm
              </Link>
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default DisplayConfirm;
