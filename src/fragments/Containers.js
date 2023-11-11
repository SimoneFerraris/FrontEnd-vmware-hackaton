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