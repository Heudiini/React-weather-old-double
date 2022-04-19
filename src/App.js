//import logo from "./logo.svg"; <img src={logo} className="App-logo" alt="logo" />
import React from "react";
import Forecast from "./Forecast";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.css";

import Title from "./Title";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Title />

        <Forecast />
      </div>{" "}
      <Footer />
    </div>
  );
}
