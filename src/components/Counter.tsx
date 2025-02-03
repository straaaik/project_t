import React, { useState } from "react";
import classes from "./Counter.module.scss";

export function Counter() {
  const [plus, usePlus] = useState(0);

  const plusic = () => {
    usePlus(plus + 1);
  };
  return (
    <div className={classes.btn}>
      Counter {plus}
      <button onClick={plusic}>PLUS</button>
    </div>
  );
}
