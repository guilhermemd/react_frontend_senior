import { useState, useEffect, useMemo, useRef } from "react";
import "./componentName.css";
import man_1 from "../img/man_1.jpg";
import CounterNumbers from "./CounterNumbers";

const ComponentName = (props) => {
  return (
    <div className="container">
      <h1 className="card-title">Our Followers</h1>
      <div className="card-part">
        <div className="card">
          <img src={man_1} alt="man_1" className="card-img" />
          <CounterNumbers />
          @xablau
        </div>
      </div>
    </div>
  );
};

export default ComponentName;
