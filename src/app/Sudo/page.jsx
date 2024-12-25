"use client";
import React, { useState } from "react";
import Sudo from "../components/Sudo";
import "../styles/sudo.css";

export default function Page() {
  const [increase, setincrease] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const increasement = () => {
    setincrease([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  };
  const decreasement = () => {
    const dec1 = increase.sort((a, b) => {
      return b - a;
    });
    console.log(dec1);
    setincrease([...dec1]);
  };

  return (
    <div className="Sudo">
      <button className="dec" onClick={decreasement}>
        dec
      </button>
      <button className="inc" onClick={increasement}>
        inc
      </button>
      <div className="numbers">
        {increase.map((nm, index) => {
          return <Sudo key={index} too={nm} />;
        })}
      </div>
    </div>
  );
}
