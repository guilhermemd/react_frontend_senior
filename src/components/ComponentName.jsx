import { useState, useEffect, useMemo, useRef } from "react";
import "./componentName.css";
import man_1 from "../img/man_1.jpg";
// import CounterNumbers from "./CounterNumbers";
import CounterAnimation from "./counterAnimation";
const ComponentName = (props) => {
  useEffect(() => {
    CounterAnimation();
  });
  return (
    <div className="container">
      <h1 className="card-title">Our Followers</h1>
      <div className="card-part">
        <div className="card">
          <img src={man_1} alt="man_1" className="card-img" />
          <div class="number" data-target-number="25000">
            25,000
          </div>
          @xablau
        </div>
      </div>
    </div>
  );
};

export default ComponentName;
