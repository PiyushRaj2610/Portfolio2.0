import { useEffect, useRef } from "react";
import HoverImage from "./components/HoverImage"
import NavbarBox from "./components/NavbarBox"
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import AnimatedBoxes from "./components/AnimatedBoxes";
import TextHover from "./components/TextHover";
import { NavBar } from "./components/NavBar";
import { MainData } from "./components/MainData";
import { About } from "./components/About";
import { SkillsSection } from "./components/SkillsSection";

function App() {

    
  

  return (
    <>
      <div className="h-[310vh] w-full bg-[#111111] md:grid-cols-3">
      

        {/* navbar */}
        <div className="flex justify-center pt-10 ">
          <NavBar/>
        </div>

        <div className="lg:h-[56vh] ">
         {/* Main data */}
          <MainData/>
        </div>


        <div className="h-[32vh] flex justify-center items-start pt-8">
        <div className="h-[22vh] pt-[12vh] top-[8vh] w-[65vw] leading-tight flex-col text-[20px] text-[#2C2C2C] text-center font-semibold">
            <TextHover text="YOUR FRIENDLY NEIGHBOURHOOD WEB DEVELOPER" />
            HOVER ME
          </div>
        </div>


        {/* about section */}
        <div>
          <About/>
        </div>


        {/* skills section */}
        <div>
          <SkillsSection/>
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
