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
    <div className="flex justify-center items-center gap-5 flex-wrap p-5">
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
          className="w-40 h-20 border-2 bg-gradient-to-b cursor-pointer  backdrop-blur-3xl bg-clip-border text-white text-[22px] tracking-wide font-bold flex justify-center items-center rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 bg-"
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBoxes;
