import createASIcon from "../createASIcon";
import React from "react";

const NoneSelected = createASIcon(
  "NoneSelected",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
  },
  <g>
    <g clip-path="url(#a)" key="1ycjfh">
      <path
        fill="#929292"
        d="M12 16.444a4.444 4.444 0 1 0 0-8.888 4.444 4.444 0 0 0 0 8.888"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-opacity=".5"
        d="M11.883 20.656a8.771 8.771 0 1 0 0-17.543 8.771 8.771 0 0 0 0 17.543"
      />
    </g>
    <defs key="9ahrjx">
      <clipPath id="a">
        <rect width="20" height="20" fill="#fff" transform="translate(2 2)" />
      </clipPath>
    </defs>
  </g>,
);

export default NoneSelected;
