import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedText: React.FC = () => {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.children;

    // Fade-in animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Typewriter effect (each letter appears one by one)
    gsap.fromTo(
      letters,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Delay between each letter
        duration: 0.6,
        ease: "power2.out",
        delay: 1, // Wait for fade-in to complete
      }
    );
  }, []);

  return (
    <h1 className="text-4xl font-bold text-white">
      <span ref={textRef} className="inline-block">
        {"Welcome to my Portfolio".split("").map((char, index) => (
          <span key={index} className="inline-block">{char}</span>
        ))}
      </span>
    </h1>
  );
};

export default AnimatedText;
