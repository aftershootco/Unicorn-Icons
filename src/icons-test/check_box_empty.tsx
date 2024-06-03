import createASIcon from "../createASIcon";
import React from "react";

const CheckBoxEmpty = createASIcon(
  "CheckBoxEmpty",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  <g>
    <rect
      width="16"
      height="16"
      rx="3"
      fill=""
      fill-opacity="0.3"
      key="jonuga"
    />
    <rect
      x="0.5"
      y="0.5"
      width="15"
      height="15"
      rx="2.5"
      stroke="green"
      stroke-opacity="0.3"
      key="1c80v2"
    />
  </g>,
  "accent",
);

export default CheckBoxEmpty;
