import AnimatedBoxes from "./AnimatedBoxes"

export const SkillsSection: any = () => {
  return (
    <div className=" h-[100vh] mt-8">
          <div className="h-[30vh] w-full text-white flex items-end pl-[4vh] pb-[1vh]">
            <div className="w-[970vh] pl-[5vh] text-6xl font-semibold align-text-bottom tracking-wide flex items-end ">
              Tech Stacks & Expertise
            </div>
          </div>
          <div className="relative flex justify-center items-center  h-[80vh]  pr-[5vh] p-[4vh] w-full ">
            <div className="bg-[#141414] rounded-4xl border-b-2  border-t-2 border-[#55C0BB] h-full w-[90vw] flex justify-center items-center ">
              <div className="absolute h-[30vh] pb-[12vh] flex justify-center items-center z-10">
              <AnimatedBoxes />
              </div>

              <div className="text-[#1d1d1d] text-[28vh] tracking-widest flex pb-[9vh] font-bold z-0">
                S K I L L S
              </div>
            </div>
        </div>

        </div>

  )
}