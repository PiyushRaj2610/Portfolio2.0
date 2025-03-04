import React, { useState } from "react";
import finalImage from "../assets/bgAfter.png"; // Image on hover
import initialImage from "../assets/theog.png"; // Default image

const HoverImage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[20vw] h-[40vh] mt-[8vh] mr-[6vh] overflow-hidden rounded-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Initial Image */}
      <img
        src={initialImage}
        alt="Initial"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isHovered ? "opacity-0 scale-105 translate-x-5" : "opacity-100 scale-100 translate-x-0"
        }`}
      />

      {/* Final Image (Appears on Hover) */}
      <img
        src={finalImage}
        alt="Final"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isHovered ? "opacity-100 scale-100 translate-x-4" : "opacity-0 scale-95 -translate-x-5"
        }`}
      />

      {/* Cool Bottom Border */}
      {/* <div
        className={`absolute bottom-0 left-1/2 h-[4px] w-0 bg-blue-500 transition-all duration-500 ease-in-out rounded-lg group-hover:w-[80%] group-hover:opacity-100 opacity-0 transform -translate-x-1/2`} */}
      {/* ></div> */}
    </div>
  );
};

export default HoverImage;
