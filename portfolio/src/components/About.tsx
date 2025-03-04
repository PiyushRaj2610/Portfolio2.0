import pfp from "../assets/pfp.png"


export const About: any = () => {
  return (
    <div className="h-[80vh] w-full flex pl-[3vh] mt-5">
          <div className=" flex-col h-[80vh] w-[70%]">
            <div className="flex h-[20vh]">
              <div className="h-[10vh] w-[32vh] pt-5 ml-[5vh] mb-[2vh] mt-[10vh] text-6xl text-white text-center font-semibold tracking-wide border-b-4 border-[#55C0BB]">
                About me
              </div>
            </div>
            <div className="flex justify-start h-[20vh] ml-[4vh] text-[#2C2C2C] text-[20vh] font-bold tracking-wide leading-[18vh]">
              P I Y U S H
            </div>
            <div className="h-[40vh] ml-[5vh] mr-[4vh] text-4xl text-white tracking-wider font-semibold leading-normal">
              A 20-year-old 
              <span className="text-[#DD8080]"> full-stack developer </span> from India, crafting sleek designs & killer code. Currently building a 
              project—who knows, maybe a future startup? 🚀    
            </div>

          </div>
          <div className=" flex justify-center items-center h-[80vh] w-[30%] ">
            <div className="h-[35vh] w-[35vh] rounded-4xl border-5 border-white bg-gradient-to-b from-[#55C0BB] to-[#DD8080] cursor-pointer">
              <img 
              src={pfp}
              className="border-4 rounded-4xl transition-transform hover:scale-104 hover:border-0"
              alt="" />
            </div>
          </div>
        </div>
  )
}