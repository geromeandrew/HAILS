import React, { useState, useEffect } from "react";
import "../../assets/styles/Popup.css";
import { Link, useParams } from "react-router-dom";

import { prediction, resetPrediction } from "./ImageClassify";
import LetterGameBackground from "../../components/LetterGameBackground";
import TryAgainText from "../../components/TryAgainText";

function TryAgain() {
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
      <LetterGameBackground />
      <div className="modal">
        <TryAgainText value={answer} />
        {prediction !== "" ? (
          <button
            onClick={() => {
              resetPrediction("");
            }}
          >
            <Link to={"/letter-game"} className="try-again">
              Try Again
            </Link>
          </button>
        ) : null}
      </div>
    </>
  );
}

export default TryAgain;
