import { MainData } from "./components/MainData";
import NavBar from "./components/NavBar";
import About from "./components/About";
import SkillsSection from "./components/SkillsSection";
import TextHover from "./components/TextHover";
import { useRef } from "react";
import Cursor from "./components/Cursor";



function App() {

 
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Cursor/>
      <div className="h-full max-w-[300vh] bg-[#111111] md:grid-cols-3 ">

      

        {/* navbar */}
        <div>
      <div className="flex justify-center pt-10 relative z-[9999999]">
        <NavBar homeRef={MainData} aboutRef={About} skillsRef={SkillsSection} />
      </div>

      {/* Home Section */}
      <div ref={homeRef} className="lg:h-[56vh] lg:w-full">
        <MainData />
      </div>

      <div className="lg:h-[32vh] flex justify-center items-start pt-8">
        <div className="lg:h-[22vh] lg:pt-[12vh] lg:top-[8vh] lg:w-[65vw] leading-tight flex-col lg:text-[20px] sm:mr-4 text-[#2C2C2C] text-center font-semibold">
          <TextHover text="YOUR FRIENDLY NEIGHBOURHOOD WEB DEVELOPER" />
          HOVER ME
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef}>
        <About />
      </div>

      {/* Skills Section */}
      <div ref={skillsRef}>
        <SkillsSection />
      </div>
    </div>


        {/* footer */}
        <div className="h-[10vh] w-full bg-[#141414] border-t-2 border-[#55C0BB] mt-[20vh] flex justify-center">
          <span
          className="text-[#4a4a4a] cursor-pointer flex justify-center items-center text-2xl font-semibold tracking-wide"
          >Piyush @2025</span>
        </div>

      </div>
    </>
  )
}

export default App
