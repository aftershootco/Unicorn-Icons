import createASIcon from "../createASIcon";
import React from "react";

const StarFillOff = createASIcon(
  "StarFillOff",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
  },
  <g>
    <mask
      id="a"
      width="24"
      height="23"
      x="0"
      y="1"
      maskUnits="userSpaceOnUse"
      key="1dmpwn"
    >
      <path fill="#fff" d="M24 1H0v22.4h24z" />
    </mask>
    <g mask="url(#a)" key="oksmg8">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m3 3.8 18 16.8"
      />
      <path
        fill="currentColor"
        d="m10.012 6.615 1.981-3.746 3.086 5.836 6.9.933-4.42 4.017zm7.558 10.783.588 3.197L12 17.567l-6.172 3.028 1.18-6.414-5-4.543 6.326-.856"
      />
    </g>
  </g>,
  "no-change",
);

export default StarFillOff;
