import React from "react";

function Divider({ flip = false, color = "#ffffff", height = "100" }) {
  return (
    <div className={`overflow-hidden ${flip ? "rotate-180" : ""} -mb-1`}>
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ height: `${height}px` }}
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,160L60,170.7C120,181,240,203,360,208C480,213,600,203,720,176C840,149,960,107,1080,90.7C1200,75,1320,85,1380,90.7L1440,96L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Divider;
