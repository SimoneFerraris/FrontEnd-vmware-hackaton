import { POIContainer, ChargingContainer } from "../fragments/Containers";
import gastronomy from "../images/gastronomy.svg";
import shopping from "../images/shopping.svg";
import help from "../images/help.svg";
import discover from "../images/discoverImg.png"
import activities from "../images/activitiesImg.svg"
import carBattery from "../util/carBattery.json"
import Lottie from "lottie-react";

function ChargingPage() {
  return (
    <div className="box">
      <div className="main">
        <div className="overlap">
          <div className="overlap-group">
            <div className="getting-bored">Getting bored?</div>
              <div className="container-gastronomy" />
                <div className="text-gastronomy">Gastronomy</div>
                <img
                  className="gastronomy-img"
                  alt="Gastronomy img"
                  src={gastronomy}
                />
            <div className="container-shops">
              <div className="text-shops">Shops</div>
              <img
                className="shopping-img"
                alt="Shopping img"
                src={shopping}
              />
            </div>
            <div className="container-discover">
              <div className="text-discover">Discover</div>
              <img
                className="discover-img"
                alt="Discover img"
                src={discover}
              />
            </div>
            <div className="container-activities">
              <div className="text-activities">Activities</div>
              <img
                className="activities-img"
                alt="Activities img"
                src={activities}
              />
            </div>
          </div>
          <div className="container-charging">
            <div className="container-help">
                <img className="img-help" alt="help" src={help} />
              <Lottie className="carbattery" animationData={carBattery} loop={true} />            
              <div className="text-h-left">00:13:00 h left</div>
              <div className="text-car-power">Power: 6.0 kWh</div>
              <div className="text-kwh">0.0121 kWh</div>
            </div>
            <div className="text-charging">Charging...</div>
          </div>
        </div>
      </div>
    </div>
  );
}
//<img className="carbattery" alt="Carbattery" src="https://c.animaapp.com/dHkemGNM/img/carbattery-1.svg" />

export default ChargingPage;

/*
import React from "react";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="main">
        <div className="overlap">
          <div className="overlap-group">
            <div className="div">
              <div className="eat-container" />
              <div className="text-wrapper">Getting bored?</div>
              <div className="text-wrapper-2">Gastronomy</div>
              <img className="gastronomy-img" alt="Gastronomy img" src="gastronomy-img.svg" />
            </div>
            <div className="overlap-2">
              <div className="text-wrapper-3">Shops</div>
              <img className="shopping-img" alt="Shopping img" src="shopping-img.svg" />
            </div>
            <div className="overlap-3">
              <div className="text-wrapper-4">Discover</div>
              <img className="discover-img" alt="Discover img" src="discover-img.svg" />
            </div>
            <div className="overlap-4">
              <div className="text-wrapper-5">Activities</div>
              <img className="activities-img" alt="Activities img" src="activities-img.svg" />
            </div>
          </div>
          <div className="overlap-5">
            <div className="overlap-6">
              <div className="help">
                <div className="overlap-group-2">
                  <img className="vector" alt="Vector" src="vector.svg" />
                  <img className="img" alt="Vector" src="image.svg" />
                  <div className="rectangle" />
                </div>
              </div>
              <img className="carbattery" alt="Carbattery" src="carbattery-1.svg" />
            </div>
            <div className="text-wrapper-6">Charging...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

*/