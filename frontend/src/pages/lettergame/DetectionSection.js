import React from "react";

import "../../assets/styles/DetectionSection.css";

import DetectionCam from "../../components/DetectionCam";
import Backdrop from "../../components/Backdrop";
import LetterGameBackground from "../../components/LetterGameBackground";

const DetectionSection = () => {
  return (
    <>
      {/* <Backdrop />
      <div className="detection-section">
        <div className="webcam">
          <LetterGameBackground
            contents={
              <div className="webcam">
                <DetectionCam />
              </div>
            }
          />
        </div>
      </div> */}

        <LetterGameBackground />
        <Backdrop />
        <div className="detection-section">
          <div className="webcam">
                <DetectionCam />
          </div>
        </div>
        
    </>
  );
};

export default DetectionSection;
