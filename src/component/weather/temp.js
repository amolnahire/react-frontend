import React from "react";
import "./style.css";

const Temp = () => {
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
          />
          <button className="searchButton" type="button">
            Search
          </button>
        </div>
      </div>

      <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny"}> </i>
        </div>
        <div className="weatherInfo">
          <span>25.5&deg;</span>
        </div>
        <div className="description">
          <div className="weatherCondition">sunny</div>
          <div className="place">

            Pune
          </div>
        </div>
        <div className="temperature"> </div>
      </article>
    </>
  );
};

export default Temp;
