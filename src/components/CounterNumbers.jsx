import { useState, useEffect, useMemo, useRef, useLayoutEffect } from "react";

const CounterNumbers = () => {
  const [number, setNumber] = useState(0);
  // const number = 0;
  const finalValue = 25000;

  useEffect(() => {
    if (number < finalValue) {
      let result = Math.floor(number + finalValue / 100);
      setTimeout(setNumber(result), 10);
    }
  }, [number]);

  // useEffect(() => {
  //   if (number < finalValue) {
  //     let result = Math.floor(number + finalValue / 100);
  //     setTimeout(setNumber(result), 10);
  //   }
  // }, [number]);

  return <div className="number">{number}</div>;
};

export default CounterNumbers;
