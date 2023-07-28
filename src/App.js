import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  //const url=`https://api.openweathermap.org/data/2.5/weather?q=polokwane&appid=1d948668927d677488db4a4793e32aae`
  return (
    <div className="App">
      <div className="conatiner">
        <div className="top">
          <div className="location">
            <p>Polokwane</p>
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">12 MPH</div>
        </div>
      </div>
    </div>
  );
}

export default App;
