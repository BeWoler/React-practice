import React from "react";
import Counter from "../components/Counter";
import ClassCounter from "../components/ClassCounter";

const CounterComponent = () => {
  return (
    <div>
      <div className="component__box">
        <h2>Functional component</h2>
        <Counter />
      </div>
      <div className="component__box">
        <h2>Class component</h2>
        <ClassCounter />
      </div>
    </div>
  );
};

export default CounterComponent;
