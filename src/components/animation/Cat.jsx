import React from "react";

import "./cat.css";

const Cat = () => {
  return (
    <div
      style={{
        margin: "100px 0",
      }}
      class="cat"
    >
      <div class="ear ear--left"></div>
      <div class="ear ear--right"></div>
      <div class="face">
        <div class="eye eye--left">
          <div class="eye-pupil"></div>
        </div>
        <div class="eye eye--right">
          <div class="eye-pupil"></div>
        </div>
        <div class="muzzle"></div>
      </div>
    </div>
  );
};

export default Cat;
