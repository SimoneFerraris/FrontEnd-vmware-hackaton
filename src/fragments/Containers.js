import React from "react";
import styles from '../styles/Webstyle.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function InstructionsContainer(objInfo) {
    return (
        <div className="box">
          <div className="plug-in">
            <div className="overlap">
              <div className="rectangle" />
              <img className="imageInstruction" alt={objInfo.imgAlt} src={objInfo.img} />
              {objInfo.desc()}
            </div>
          </div>
        </div>
      );
};


export {InstructionsContainer};