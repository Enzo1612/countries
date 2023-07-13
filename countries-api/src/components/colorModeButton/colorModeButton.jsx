import { React, useState } from "react";
import { BsMoon } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import "./ColorModeButton.css";

function ColorModeButton() {
  const [checked, setChecked] = useState(true);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    document.getElementById("bsmoon").style.display = "none";
    document.getElementById("bsmoonfill").style.display = "flex";
    document.getElementById("colorButtonP").textContent = "Light Mode";
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    document.getElementById("bsmoon").style.display = "flex";
    document.getElementById("bsmoonfill").style.display = "none";
    document.getElementById("colorButtonP").textContent = "Dark Mode";
  };

  const toggleTheme = () => {
    if (checked) {
      setDarkMode();
      setChecked(false);
    } else {
      setLightMode();
      setChecked(true);
    }
  };
  return (
    <div className="colorButtonContainer">
      <div id="bsmoon" onClick={toggleTheme}>
        <BsMoon />
      </div>
      <div id="bsmoonfill" onClick={toggleTheme}>
        <BsMoonFill />
      </div>
      <p id="colorButtonP" onClick={toggleTheme}>
        Dark Mode
      </p>
    </div>
  );
}

export default ColorModeButton;
