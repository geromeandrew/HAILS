import Webcam from "react-webcam";
import React, { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { Link } from "react-router-dom";

import "../../assets/styles/ImageClassify.css";
import { pk } from "../Lessons/CourseContent";
import { updatePk } from "../Lessons/CourseContent";

let prediction = "";
function resetPrediction(newPrediction) {
  prediction = newPrediction;
}

export { prediction, resetPrediction };

function ImageClassify() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const model = await tf.loadGraphModel(
        "https://sign-language-detection-model.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
      );
      setModel(model);
    };
    loadModel();
  }, []);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    console.log(prediction);
  };

  useEffect(() => {
    if (imageSrc) {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => predict(image, model);
    }
    const predict = (imageData, model) => {
      const tensor = tf.browser.fromPixels(imageData).toFloat();
      const resized = tf.image.resizeBilinear(tensor, [150, 150]);
      const offset = tf.scalar(127.5);
      const normalized = resized.div(offset).sub(tf.scalar(1.0));
      const batched = normalized.expandDims(0);
      const predictions = model.predict(batched);
      const arr = predictions.arraySync()[0];
      const imgLabel = ["A", "E", "I", "O", "U"];
      const maxIndex = arr.indexOf(Math.max(...arr));
      prediction = imgLabel[maxIndex];
    };
  }, [imageSrc, model]);

  return (
    <>
      {prediction !== "" ? (
        <Link to={"/displayconfirm/" + pk}>
          <button
            className="submitButton"
            onClick={capture}
            // onClick={() => {
            //   capture();
            //   updatePk(pk + 1);
            //   console.log(pk);
            // }}
          >
            Submit
          </button>
        </Link>
      ) : (
        <button className="submitButton" onClick={capture}>
          Submit
        </button>
      )}

      <Webcam
        screenshotFormat="image/jpeg"
        ref={webcamRef}
        muted={true}
        style={{
          position: "absolute",
          margin: "auto",
          width: "1215px",
          height: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          border: "10px solid #4C51BF",
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          marginBottom: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: "1215px",
          height: "750px",
        }}
      />
    </>
  );
}

export default ImageClassify;
