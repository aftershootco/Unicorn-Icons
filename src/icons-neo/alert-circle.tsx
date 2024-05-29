import createASIcon from "../createASIcon";
import React from "react";

const AlertCircle = createASIcon(
  "AlertCircle",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "21",
    height: "20",
    fill: "red",
    viewBox: "0 0 21 20",
  },
  <g>
    <g clip-path="url(#a)">
      <path d="M10.5 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 6.667V10"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 13.333h.008"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width="20" height="20" fill="#fff" transform="translate(.5)" />
      </clipPath>
    </defs>
  </g>,
);

export default AlertCircle;
