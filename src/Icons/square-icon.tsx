import createASIcon from "../createASIcon";
import React from "react";

const SquareIcon = createASIcon(
  "SquareIcon",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
  },
  <g>
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
      key="m7m9ve"
    />
  </g>,
  "outline",
);

export default SquareIcon;
