import React from "react";
import styles from '../styles/Webstyle.scss';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
/*

import React from "react";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="plug-in">
        <div className="overlap-group">
          <div className="rectangle" />
          <img className="istockphoto" alt="Istockphoto" src="istockphoto-1431371117-612x612-removebg-preview-1.png" />
          <p className="car-detected-plug-in">
            <span className="text-wrapper">
              Car detected, <br />
            </span>
            <span className="span">Plug In</span>
            <span className="text-wrapper"> the pump!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

*/
function InstructionsContainer(objInfo) {
    return (
    <div className = {`containerInstructions ${styles.containerInstructions}`}>
            <img style = {{width: "263px", height: "263px"}} src={objInfo.img} alt={objInfo.imgAlt}></img>
        <div className = {`textInstructions ${styles.textInstructions}`}>
            {objInfo.desc()}
        </div>
    </div>
    );
};

function ChargingContainer() {
    return (
        <div style={{justifyContent: 'center', height: '50vh' }}>
            <div className = {`chargingContainer ${styles.chargingContainer}`}>
                <h1 style={{paddingLeft: '50px', paddingTop: '10px', fontSize: '45px' }}>Charging...</h1>
            </div>
        </div>
    )
}

function POIContainer() {
    return (
        <div style={{  justifyContent: 'center', height: '50vh' }}>
            <div className = {`poiContainer ${styles.poiContainer}`}>
                
                <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
                <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <h1 style={{paddingLeft: '50px', paddingTop: '15px', fontSize: '45px' }}>Getting bored?</h1>
                        </Grid>
                        <Grid item xs={6}>
                            {buttonContainer}
                        </Grid>
                        <Grid item xs={6}>
                            {buttonContainer}
                        </Grid>
                        <Grid item xs={6}>
                            {buttonContainer}
                        </Grid>
                        <Grid item xs={6}>
                            {buttonContainer}
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
    
}

const buttonContainer = 
    <>
    <div className = {`buttonContainer ${styles.buttonContainer}`}>
    </div>
    </>

export {InstructionsContainer, ChargingContainer, POIContainer};