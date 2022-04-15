import React from "react";
import "./css/styles.css";

export default function Search() {
  return (
    <div>
      <form id="theForm">
        <input type="search" placeholder="Search.." id="city-input" className="searchBox" />
        <input type="submit" value="submit" className="searchBox-submit" />
      </form>

      <h1 className="titleh1">Weather Heudiini</h1>

      <button id="locationBtn">
        <small>current</small>
      </button>
    </div>
  );
}
