import React from "react";

function ArrowUpLg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      className="lg:flex xsm:hidden"
    >
      <g>
        <rect
          width="40"
          height="40"
          y="40"
          fill="#D8D4DE"
          rx="20"
          transform="rotate(-90 0 40)"
        ></rect>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.25"
          d="M19.75 26L13 19.25l6.75-6.75m-5.813 6.75h13.688"
        ></path>
      </g>
    </svg>
  );
}

export default ArrowUpLg;
