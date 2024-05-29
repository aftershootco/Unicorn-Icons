import createASIcon from "../createASIcon";
import React from "react";

const CartIcon = createASIcon(
  "CartIcon",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "36",
    height: "36",
    fill: "none",
    viewBox: "0 0 36 36",
  },
  <g>
    <g clip-path="url(#a)" key="1ycjfh">
      <path d="M9 31.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      <path d="M25.5 31.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      <path d="M25.5 25.5H9v-21H6" />
      <path d="M9 7.5 30 9l-1.5 10.5H9" />
    </g>
    <defs key="9ahrjx">
      <clipPath id="a">
        <rect width="36" height="36" fill="#fff" />
      </clipPath>
    </defs>
  </g>,
);

export default CartIcon;
