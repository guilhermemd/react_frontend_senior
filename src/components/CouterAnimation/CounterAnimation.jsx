import { useEffect } from "react";

import { useCounterAnimation } from "../../talons/CounterAnimation/useCounterAnimation";
const CounterAnimation = (props) => {
  const { totalValue } = props;
  const { callCounterAnimation } = useCounterAnimation();

  useEffect(() => {
    callCounterAnimation();
  });

  return (
    <div className="number" data-target-number={totalValue}>
      0
    </div>
  );
};

export default CounterAnimation;
