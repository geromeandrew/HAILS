import React from "react";
import "../assets/styles/Backdrop.css";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onCancel}/>;
}

export default Backdrop;
