import React from "react";
import "./css/App.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <small>
          © 2022{" "}
          <a href="https://github.com/Heudiini/React-weather" target="_blank" rel="noreferrer">
            opensource code
          </a>
          <a href="https://heudiinis.netlify.app/" target="_blank" rel="noreferrer">
            {" "}
            Heudiini{" "}
          </a>
        </small>
      </footer>
    </div>
  );
}
