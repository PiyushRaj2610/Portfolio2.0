import AnimatedBoxes from "./AnimatedBoxes"

const SkillsSection: any = () => {
  return (
    <div className=" lg:h-[90vh] sm:h-[80vh] mt-8">
          <div className="lg:h-[30vh] w-full text-white flex items-end pl-[2vh] lg:pb-[1vh]">
            <div className="w-full lg:pl-[2vh] lg:text-6xl sm:text-5xl sm:pl-[1vh] font-semibold  tracking-wide flex items-end ">
              Tech Stacks & Expertise
            </div>
          </div>
          <div className="relative flex justify-center items-center  h-[80vh]  pr-[5vh] p-[4vh] w-full ">
            <div className="bg-[#141414] rounded-4xl border-b-2  border-t-2 border-[#55C0BB] h-full lg:w-[90vw] sm:w-[80vw] flex justify-center items-center overflow-hidden">
              <div className="absolute lg:h-full pb-[12vh] flex justify-center items-center z-10">
              <AnimatedBoxes />
              </div>

              <div className="text-[#1d1d1d] lg:text-[28vh] sm:text-[10vh] lg:tracking-widest flex lg:pb-[5vh] sm:tracking-tight font-bold z-0">
                S K I L L S
              </div>
            </div>
        </div>

        </div>

  )
}

export default SkillsSection;