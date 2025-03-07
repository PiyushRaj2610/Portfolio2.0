import React, { useState } from "react";

interface HeadingProps {
  text: string;
}

export const Heading: React.FC<HeadingProps> = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      onMouseEnter={handleHover}
      className={`border-b-[0.5px] text-[5vh] w-full flex justify-center items-center font-bold tracking-wider cursor-pointer text-transparent bg-clip-text bg-gradient-to-r ${
        hovered ? "from-[#55C0BB] to-blue-400 opacity-80" : "from-[#282929] to-[#282929] opacity-80"
      } transition-colors duration-500`}
    >
      {text}
    </div>
  );
};
