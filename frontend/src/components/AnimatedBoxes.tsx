import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBoxes = () => {
  const boxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (boxRefs.current.length === 0) return;

    boxRefs.current.forEach((box, i) => {
      gsap.to(box, {
        y: 100, // Increased movement (more up and down)
        duration: 5, // Slightly faster animation
        repeat: -1, // Infinite loop
        yoyo: true, // Moves back and forth
        ease: "power1.inOut",
        delay: i * 0.15, // More stagger effect
      });
    });
  }, []);

  return (
    <div className="flex justify-center items-center lg:gap-6 sm:gap-10 flex-wrap sm:pt-10 p-8">
      {[
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Tailwind",
        "MongoDB",
        "Express",
        "React.js",
        "Node.js",
      ].map((text, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el && !boxRefs.current.includes(el)) {
              boxRefs.current.push(el);
            }
          }}
          className="lg:w-40 sm:w-[14vh] sm:h-[6vh] lg:h-20 border-2 bg-gradient-to-b cursor-pointer  backdrop-blur-xl bg-clip-border text-white text-[22px] tracking-wide font-bold flex justify-center items-center rounded-lg shadow-lg transition-transform hover:text-[#75ddd8] duration-100"

        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBoxes;
