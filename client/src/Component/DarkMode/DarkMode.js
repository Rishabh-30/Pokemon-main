import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "Dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLigthMode = () => {
    document.querySelector("body").setAttribute("data-theme", "Light");
    localStorage.setItem("selectedTheme", "Light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLigthMode();
    }
  };
  return (
    <div className="dark-theme">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" for="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
