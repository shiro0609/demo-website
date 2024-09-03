import React from "react";
import DarkButton from "../assets/DarkToggle.webp";
import LightButton from "../assets/LightToggle.webp";

const DarkMode = () => {
  const[theme, setTheme] = React.useState(
    localStorage.getItem("theme")? localStorage.getItem
    ("theme"): "light"
  )
  const element = document.documentElement;

  React.useEffect(()=> {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[theme]);

  return (
    <div className="relative">
      <img src={LightButton} alt="" onClick={()=> setTheme(theme === "light" ? "dark" : "light")}
      className={`h-5 w-8 cursor-pointer transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`} />
      <img src={DarkButton} alt=""  onClick={()=> setTheme(theme === "light" ? "dark" : "light")}
      className="h-5 w-8 cursor-pointer transition-all duration-300 "/>
    </div>
  )
}

export default DarkMode;
