import React from "react";
import "./css/App.css";
import logo from "./logo.svg";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <small>
          {" "}
          App made with <img className="logo" src={logo} alt="Logo" /> React by{" "}
          <a href="https://heudiinis.netlify.app/" target="_blank" rel="noreferrer">
            {" "}
            Heudiini{" "}
          </a>
          <a href="https://github.com/Heudiini/React-weather" target="_blank" rel="noreferrer">
            opensource code
          </a>
        </small>
      </footer>
    </div>
  );
}
