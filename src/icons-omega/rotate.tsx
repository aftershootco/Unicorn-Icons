import createASIcon from "../createASIcon";
import React from "react";

const Rotate = createASIcon(
  "Rotate",
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
        d="M19.95 13a8 8 0 1 1-.5-4m.5-5v5h-5"
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
);

export default Rotate;
