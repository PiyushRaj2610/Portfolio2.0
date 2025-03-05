import { useEffect, useRef } from "react";



const Cursor = () => {
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const circles = circlesRef.current.filter(Boolean) as HTMLDivElement[];

   

    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let { x, y } = coords.current;

      circles.forEach((circle) => {
        circle.style.left = `${x-19}px`;
        circle.style.top = `${y-22}px`;

      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 1 }).map((_, index) => (
        <div
          key={index}
          className="w-8 h-8 border-[#C6CBA9] border-2 rounded-full fixed top-0 left-0 pointer-events-none z-[9999]"
          ref={(el) => {
            circlesRef.current[index] = el;
          }}
        ></div>
      ))}
    </>
  );
};

export default Cursor;
