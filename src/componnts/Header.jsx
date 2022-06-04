import React, { useState, useContext } from "react";
import "../assets/Header.scss";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "Dark" : "Light"}`}>
      <h1 style={{ color }}>ReactHooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
