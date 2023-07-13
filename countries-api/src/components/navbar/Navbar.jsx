import React from "react";
import "./Navbar.css";
import ColorModeButton from "../colorModeButton/colorModeButton";

function Navbar() {
  return (
    <div className="navbarContainer">
      <h1>Where in the world?</h1>
      <ColorModeButton />
    </div>
  );
}

export default Navbar;
