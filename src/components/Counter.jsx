import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import './Counter.css'


export default function Counter() {
  const [count, setCount] = useState(0);

  const addNum = () => {
    setCount(count + 1);
  };

  const decNum = () => {
    if (count > 0) setCount(count - 1);
    else {
      setCount(0);
    }
  };

  return (
    <>
      <label>Quantas Unidades?</label>
          <div className="counter_btn_div">
           <Button onClick={decNum}>
              <RemoveIcon />
            </Button>
          <h1>{count}</h1>
            <Button onClick={addNum}>
              <AddIcon />
            </Button>
          </div>
    </>
  );
};
