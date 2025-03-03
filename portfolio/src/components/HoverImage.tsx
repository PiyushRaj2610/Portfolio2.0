import React, { useState } from "react";
import finalImage from "../assets/pfp_bg.png"; // Image on hover
import initialImage from "../assets/theog.png"; // Default image

const HoverImage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[30vw] h-[60vh] overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Initial Image */}
      <img
        src={initialImage}
        alt="Initial"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Final Image (Appears on Hover) */}
      <img
        src={finalImage}
        alt="Final"
        className={`absolute inset-0 w-full pr-[1vw] h-full object-cover transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default HoverImage;
