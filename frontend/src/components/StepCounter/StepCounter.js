import React, { useState } from "react";
import StepNavigation from "./StepNavigation";
import '../../assets/styles/StepCounter.css';
import { pk } from '../../pages/Lessons/CourseContent';

function StepCounter(props) {

    const labelArray = ['Recto', 'Legarda', 'Pureza', 'V.Mapa', 'J.Ruiz', 'Gilmore', 'Betty Go', 'Araneta', 'Anonas', 'Katipunan', 'Santolan', 'Marikina', 'Antipolo']
    const [currentStep, updateCurrentStep] = useState(1);

    function updateStep(pk) {
        const pkstep = pk;
        updateCurrentStep(pkstep);
    }



    return (
        <div className="step-counter-group">
            <div className="station-name-group">
                <p className="station-text">{labelArray[pk-1]} Station</p>
                <p className="station-subtext">LRT 2</p>
            </div>
            
            <div className="step-counter-div">
                
                <StepNavigation labelArray={labelArray} currentStep={pk} updateStep={updateStep}></StepNavigation>

                
                
                {/* <button className="primaryButton" disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}>Previous Step</button> */}
                {/* <button className="btn-go" disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep+1)}>Go</button> */}
                <button className="btn-go" disabled={currentStep === labelArray.length} 
                    onClick={() => {
                        updateStep(pk);
                        props.deleteHandler();
                    }}>Go</button>
            </div>
            
        </div>
            

    )
}


export default StepCounter