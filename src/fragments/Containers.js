import React from "react";
import styles from '../styles/Webstyle.scss';

/*

*/
function InstructionsContainer(objInfo) {
    return (
    <div className = {`containerInstructions ${styles.containerInstructions}`}>
            <img style = {{width: "263px", height: "263px"}} src={objInfo.img} alt={objInfo.imgAlt}></img>
        <div className = {`textInstructions ${styles.textInstructions}`}>
            {objInfo.desc}
        </div>
    </div>
    );
};

function MainContainer(obj) {
    return (
        <div>
            <div className = {`containerInstructions ${styles.containerInstructions}`}>
                <img src={obj.img} alt={obj.imgAlt}></img>
                <div className = {`textInstructions ${styles.textInstructions}`}>
                    {obj.desc}
                </div>
            </div>
            <div className = {`containerInstructions ${styles.containerInstructions}`}>
                <img src={obj.img} alt={obj.imgAlt}></img>
                <div className = {`textInstructions ${styles.textInstructions}`}>
                    {obj.desc}
                </div>
            </div>
        </div>
    );
    
}

export {InstructionsContainer, MainContainer};