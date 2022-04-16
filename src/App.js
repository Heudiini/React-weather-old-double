//import logo from "./logo.svg"; <img src={logo} className="App-logo" alt="logo" />
import React from "react";
import Forecast from "./Forecast";
import "./css/App.css";
import Head from "./Head";
import Title from "./Title";
import Footer from "./Footer";
import "./logo.svg";

export default function App() {
  return (
    <div className="App">
      <Head />
      <div className="container">
        <Title />
        <logo />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
