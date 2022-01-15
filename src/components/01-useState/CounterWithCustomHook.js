import React from "react";
import { useCounter } from "../../hooks/useCounter";

import "./counter.css";

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />

      <button onClick={() => increment(5)} className="btn btn-danger">
        + 5
      </button>
      <button onClick={reset} className="btn btn-danger">
        Reset
      </button>
      <button onClick={() => decrement(5)} className="btn btn-danger">
        - 5
      </button>
    </>
  );
};

export default CounterWithCustomHook;
