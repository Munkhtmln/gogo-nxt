import React from "react";
import "../styles/cover.css";
import { Covertop } from "./Covertop";
import { Coverbottom } from "./Coverbottom";

export const Cover = () => {
  return (
    <div className="Cover">
      <Covertop />
      <Coverbottom />
    </div>
  );
};
