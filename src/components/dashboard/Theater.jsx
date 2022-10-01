import React from "react";
import "./css/Theater.css";
import wallpaper from "../../images/3.jpg";

export default function Theater() {
  return (
    <div className="theater-container">
      <div id="float">
        <img width="100%" src={wallpaper} alt="bubbles" />
      </div>
    </div>
  );
}
