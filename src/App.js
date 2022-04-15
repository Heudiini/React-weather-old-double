//import logo from "./logo.svg"; <img src={logo} className="App-logo" alt="logo" />
import React from "react";
import Forecast from "./Forecast";
import "./css/styles.css";
import Head from "./Head";
import Search from "./Search";
import Footer from "./Footer";
//import "./skyNew.jpeg";

export default function App() {
  return (
    <div className="App">
      <Head />
      <div className="container">
        <Search />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
