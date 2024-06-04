import createASIcon from "../createASIcon";
import React from "react";

const RotateClockwiseIcon = createASIcon(
  "RotateClockwiseIcon",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
  },
  <g>
    <g clip-path="url(#a)" key="1ycjfh">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.05 13a8 8 0 1 0 .5-4m-.5-5v5h5"
      />
    </g>
    <defs key="9ahrjx">
      <clipPath id="a">
        <rect
          width="24"
          height="24"
          fill="#fff"
          transform="matrix(1 0 0 -1 0 24)"
        />
      </clipPath>
    </defs>
  </g>,
  "outline",
);

export default RotateClockwiseIcon;
