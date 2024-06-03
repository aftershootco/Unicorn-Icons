import createASIcon from "../createASIcon";
import React from "react";

const FolderFill = createASIcon(
  "FolderFill",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
  },
  <g>
    <g clip-path="url(#a)" key="1ycjfh">
      <mask
        id="b"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M24 0H0v24h24z" />
      </mask>
      <g mask="url(#b)">
        <path
          fill="currentColor"
          d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"
        />
      </g>
    </g>
    <defs key="9ahrjx">
      <clipPath id="a">
        <rect width="24" height="24" fill="#fff" />
      </clipPath>
    </defs>
  </g>,
  "no-change",
);

export default FolderFill;
