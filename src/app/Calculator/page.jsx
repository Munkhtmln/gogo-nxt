"use client";

import React, { useState } from "react";

export default function Page() {
  const [number, setNumber] = useState();
  function PrintNumber(a) {
    setNumber(a);
  }
  return (
    <div>
      <p>number:{number}</p>
      <button onClick={() => PrintNumber(1)}>1</button>
      <button onClick={() => PrintNumber(2)}>2</button>
      <button onClick={() => PrintNumber(3)}>3</button>
      <button onClick={() => PrintNumber(4)}>4</button>
      <button onClick={() => PrintNumber(5)}>5</button>
      <button onClick={() => PrintNumber(6)}>6</button>
      <button onClick={() => PrintNumber(7)}>7</button>
      <button onClick={() => PrintNumber(8)}>8</button>
      <button onClick={() => PrintNumber(9)}>9</button>
    </div>
  );
}
