import React, { useState } from "react";
import finalImage from "../assets/pfp_bg.png"; // Image on hover
import initialImage from "../assets/theog.png"; // Default image

const HoverImage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative lg:w-[30vw] lg:h-[60vh] sm:w-[50vw] sm:h-[30vh] overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Initial Image */}
      <img
        src={initialImage}
        alt="Initial"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isHovered ? "opacity-0 rotate-y-180 scale-90 blur-lg" : "opacity-100 rotate-y-0 scale-100 blur-0"
        }`}
      />
      {/* Final Image (Appears on Hover) */}
      <img
        src={finalImage}
        alt="Final"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isHovered ? "opacity-100 rotate-y-0 scale-100 blur-0" : "opacity-0 rotate-y-180 scale-110 blur-md"
        }`}
      />
    </div>
  );
};

export default HoverImage;
