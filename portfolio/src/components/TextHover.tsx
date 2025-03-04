import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP's TextPlugin
gsap.registerPlugin(TextPlugin);

interface TextProps {
  text: string;
}

const TextHover: React.FC<TextProps> = ({ text }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const animatedTextRef = useRef<HTMLDivElement>(null);

  // Hover effect for individual letters
  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll("span");

    letters.forEach((letter) => {
      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, { color: "#DD8080", duration: 0.01, y: -3 });
      });

      letter.addEventListener("mouseleave", () => {
        gsap.to(letter, { color: "#C6CBA9", duration: 0.01, y: 0 });
      });
    });

    return () => {
      letters.forEach((letter) => {
        letter.removeEventListener("mouseenter", () => {});
        letter.removeEventListener("mouseleave", () => {});
      });
    };
  }, [text]);

  
  return (
    <div className="lg:text-[4vh] sm:text-[15px] tracking-widest font-bold text-[#2C2C2C] flex flex-col justify-center items-center h-[5vh]">
      {/* This text animates on reload */}
      <div ref={animatedTextRef} className="mb- text-[#2C2C2C]"></div>

      {/* This text has the hover effect */}
      <div ref={textRef} className="cursor-pointer">
        {text.split("").map((char, index) => (
          <span key={index} className="inline-block transition-all">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextHover;
