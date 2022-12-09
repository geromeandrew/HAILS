import Webcam from "react-webcam";
import React, { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { useParams } from 'react-router-dom'

import DrawRect from "./DrawRect";

function DetectionCam() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const img = tf.browser.fromPixels(video);
      const resized = tf.image.resizeBilinear(img, [1215, 750]);
      const casted = resized.cast("int32");
      const expanded = casted.expandDims(0);
      const obj = await net.executeAsync(expanded);
      console.log(obj);

      const boxes = await obj[1].array();
      const classes = await obj[2].array();
      const scores = await obj[4].array();

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // Update drawing utility
      // drawSomething(obj, ctx)
      requestAnimationFrame(() => {
        DrawRect(
          boxes[0],
          classes[0],
          scores[0],
          0.8,
          videoWidth,
          videoHeight,
          ctx
        );
      });

      tf.dispose(img);
      tf.dispose(resized);
      tf.dispose(casted);
      tf.dispose(expanded);
      tf.dispose(obj);
    }
  };
  let { id } = useParams();
  let [model, setModel] = useState([]);
  useEffect(() => {
    const getModel = async () => {
      let response = await fetch(`http://127.0.0.1:8000/api/model/${id}`);
      let data = await response.json()
      setModel(data);
    };
    getModel();
  }, [id]);

  useEffect(() => {
    const runDetect = async () => {
      const net = await tf.loadGraphModel(model.body);
      //   const net = await tf.loadGraphModel(
      //     "https://sign-language-detection-model.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
      //   );
      //   const net = await tf.loadGraphModel(
      //     "https://teachable-machine-model.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
      //   );
      //   const net = await tf.loadGraphModel("../../assets/model.json");

      //  Loop and detect hands
      setInterval(() => {
        detect(net);
      }, 16.7);
    };
    runDetect();
  }, [model.body]);
return (
  <div>
    <Webcam
      ref={webcamRef}
      muted={true}
      style={{
        position: 'absolute',
        margin: 'auto',
        width: '1215px',
        height: 'auto',
        left: 0,
        right: 0,
        textAlign: "center",

        // position: "absolute",
        // marginLeft: "auto",
        // marginRight: "auto",
        // marginTop: 'auto',
        // marginBottom: 'auto',
        // left: 0,
        // right: 0,
        // textAlign: "center",
        // zindex: 9,
        // width: 1215,
        // height: 750,
        // border: '10px solid #4C51BF',
      }}
    />

    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 0,
        right: 0,
        textAlign: "center",
        zindex: 9,
        width: '1215px',
        height: 'auto',
        border: '10px solid #4C51BF',
      }}
    />
  </div>
);
};

export default DetectionCam;
