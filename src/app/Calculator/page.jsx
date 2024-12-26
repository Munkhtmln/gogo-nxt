"use client";

import React, { useState } from "react";
import "./calculator.css";
import { setConfig } from "next/config";

export default function Page() {
  const [Screen, setScreen] = useState("");
  const [operation, setOperation] = useState();

  function PrintNumber(value) {
    setScreen(Screen + value);
  }

  function clearHandler() {
    setScreen("");
  }

  function operationHandler() {
    for (let i = 0; i < Screen.length; i++) {
      if (Screen[i] === "+") {
        const nums = Screen.split("+");
        const result = Number(nums[0]) + Number(nums[1]) + Number(nums[2]);
        setScreen(result);
      }

      if (Screen[i] === "-") {
        const toonud = Screen.split("-");
        const ylgavar = Number(toonud[0]) - Number(toonud[1]);
        setScreen(ylgavar);
      }
      if (Screen[i] === "*") {
        const toos = Screen.split("*");
        const urjver = Number(toos[0]) * Number(toos[1]);
        setScreen(urjver);
      }
      if (Screen[i] === "/") {
        const tooguud = Screen.split("/");
        const huwaagc = Number(tooguud[0]) / Number(tooguud[1]);
        setScreen(huwaagc);
      }
    }
  }

  return (
    <div className="Calculator">
      <p>{Screen}</p>
      <div className="buttoncontainer">
        <button onClick={() => PrintNumber(1)}>1</button>
        <button onClick={() => PrintNumber(2)}>2</button>
        <button onClick={() => PrintNumber(3)}>3</button>
        <button onClick={() => PrintNumber(4)}>4</button>
        <button onClick={() => PrintNumber(5)}>5</button>
        <button onClick={() => PrintNumber(6)}>6</button>
        <button onClick={() => PrintNumber(7)}>7</button>
        <button onClick={() => PrintNumber(8)}>8</button>
        <button onClick={() => PrintNumber(9)}>9</button>
        <button onClick={() => PrintNumber("+")}>+</button>
        <button onClick={() => PrintNumber("-")}>-</button>
        <button onClick={() => PrintNumber("*")}>*</button>
        <button onClick={() => PrintNumber("/")}>/</button>
        <button onClick={operationHandler}>=</button>
        <button onClick={clearHandler}>C</button>
      </div>
    </div>
  );
}
