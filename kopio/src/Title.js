import React from "react";
import "./css/App.css";
import logo from "./logo.svg";

export default function Title() {
  return (
    <div>
      <h1 className="titleh1">
        {" "}
        <img className="logo" src={logo} alt="Logo" />
        Weather Heudiini
      </h1>
    </div>
  );
}
