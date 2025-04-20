'use client'

import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    // select html elem
    const html = document.querySelector("html");
    if (html) {
      if (localStorage.getItem("theme") === "dark") {
        html.classList.add("dark");
        setTheme("dark");
      } else {
        html.classList.remove("dark");
        setTheme("light");
      }
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="w-[50px] flex items-center justify-center">
      <div className="p-2" onClick={handleThemeSwitch}>
        {theme === "light" ? <BsSun className="text-[#000]"/> : <BsMoon className="dark:text-[#fff]"/>}
      </div>
    </div>
  );
};

export default ToggleTheme;
