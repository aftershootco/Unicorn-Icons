import createASIcon from "../createASIcon";
import React from "react";

const AlertWhite = createASIcon(
  "AlertWhite",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    viewBox: "0 0 12 12",
  },
  <g>
    <g
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      clip-path="url(#a)"
    >
      <path d="M2.5 9.5h7a1 1 0 0 0 .92-1.375L6.87 2a1 1 0 0 0-1.75 0L1.57 8.125A1 1 0 0 0 2.445 9.5" />
      <path d="M6 7.5v.005M6 4.5v1z" />
    </g>
    <defs>
      <clipPath id="a">
        <rect width="12" height="12" fill="#fff" />
      </clipPath>
    </defs>
  </g>,
);

export default AlertWhite;
