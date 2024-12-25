import React from "react";
import "../styles/header.css";

export const Header = () => {
  return (
    <div className="header">
      <img src="/logo.jpeg" alt="" />
      <p>Мэдээ</p>
      <p>GoGo булан </p>
      <p> Үзэх </p>
      <p> Хэв маяг </p>
      <p> English </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-search"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <img
        className="weather
      "
        src="/weather.jpeg"
        alt=""
      />
    </div>
  );
};
