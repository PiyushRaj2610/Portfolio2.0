import pfp from "../assets/pfp.png"


const About: any = () => {
  return (
    <div className="lg:h-[80vh] lg:w-full lg:flex  lg:pl-[3vh] mt-5">
          <div className=" flex-col sm:justify-center sm:items-center lg:h-[80vh] sm:h-[62vh] lg:w-[70%]">
            <div className="flex lg:h-[20vh]">
              <div className="lg:h-[10vh] sm:h-[7vh] sm:ml-[2vh] w-[32vh] pt-5 lg:ml-[5vh] lg:mb-[2vh] mt-[10vh] lg:text-6xl sm:text-4xl text-white text-center font-semibold tracking-wide lg:border-b-4 sm:border-b-2 border-[#55C0BB]">
                About me
              </div>
            </div>
            <div className="flex sm:just lg:justify-start lg:h-[20vh] sm:h-[14vh] lg:ml-[4vh] text-[#2C2C2C] lg:text-[20vh] sm:text-[7vh] font-bold  sm:pl-[2vh] sm:tracking-tight lg:tracking-wide leading-[18vh]">
              P I Y U S H
            </div>
            <div className="lg:h-[40vh] lg:ml-[5vh] mr-[4vh] lg:text-4xl sm:text-[3vh] text-white lg:tracking-wider sm:ml-[2vh] lg:font-semibold leading-normal">
              A 20-year-old 
              <span className="text-[#DD8080]"> full-stack developer </span> from India, specializing in creating sleek designs and efficient code. Currently building a 
              project—who knows, maybe a future startup? 🚀    
            </div>

          </div>
          <div className=" sm:h-[50vh] flex justify-start lg:items-center lg:h-[80vh] lg:w-[30%] sm:ml-[2vh] ">
            <div className="lg:h-[35vh] lg:w-[35vh] sm:w-[20vh] rounded-4xl lg:border-5 border-white sm:h-[20vh] sm:border-4 bg-gradient-to-b from-[#55C0BB] to-[#DD8080] cursor-pointer">
              <img 
              src={pfp}
              className="lg:border-4 sm:border-2 rounded-4xl transition-transform hover:scale-104 hover:border-0"
              alt="" />
            </div>
          </div>
        </div>
  )
}

export default About;