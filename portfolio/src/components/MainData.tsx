import { Typewriter } from "react-simple-typewriter"
import HoverImage from "./HoverImage"
import { useEffect, useRef } from "react";
import gsap from "gsap";


export const MainData: any = () => {

  const borderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      gsap.fromTo(
        borderRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1, ease: "power3.inOut"},
      );
    }, []);

  return (
    <div 
    className="lg:flex lg:w-full lg:justify-center sm:w-full sm:flex sm:justify-center">
          <div className="inline-block text-[#C6CBA9] pl-[3vw] lg:pt-[20vh] sm:pt-[40vh] flex-1 items-center justify-center font-semibold tracking-widest">
          
          <div className="inline-block  text-[#C6CBA9] lg:pl-[8vh] lg:grid-1 lg:text-9xl sm:text-4xl sm:pl-[20vh] font-semibold tracking-wider">
            <Typewriter 
            words={["FULLSTACK"]} 
            loop={1} 
            cursor 
            cursorStyle="" 
            typeSpeed={80} />
          </div>

          {/* all svgs */}

            <div className=" lg:mt-4 lg:h-[6vh] lg:pl-[9vh] lg:w-[16vw] lg:pr-[3vh] lg:flex lg:justify-between sm:flex sm:justify-between sm:pl-[19vh] sm:pr-[12vh] sm:w-14vw] ">
            <a href="https://github.com/PiyushRaj2610" target="_blank">
            <svg
            className="lg:h-11 sm:mb-2 w-[41px] sm:m-2 cursor-pointer"
            width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.567 28.7184C12.567 28.8629 12.4008 28.9785 12.1912 28.9785C11.9527 29.0002 11.7865 28.8846 11.7865 28.7184C11.7865 28.5738 11.9527 28.4582 12.1623 28.4582C12.3791 28.4365 12.567 28.5521 12.567 28.7184ZM10.3195 28.3932C10.2689 28.5377 10.4135 28.7039 10.6303 28.7473C10.8182 28.8195 11.035 28.7473 11.0783 28.6027C11.1217 28.4582 10.9844 28.292 10.7676 28.227C10.5797 28.1764 10.3701 28.2486 10.3195 28.3932ZM13.5137 28.2703C13.3041 28.3209 13.1596 28.4582 13.1813 28.6244C13.2029 28.7689 13.3908 28.8629 13.6076 28.8123C13.8172 28.7617 13.9617 28.6244 13.94 28.4799C13.9184 28.3426 13.7232 28.2486 13.5137 28.2703ZM18.2688 0.578125C8.24551 0.578125 0.578125 8.1877 0.578125 18.2109C0.578125 26.2252 5.62227 33.0832 12.8271 35.4969C13.7521 35.6631 14.0773 35.0922 14.0773 34.6225C14.0773 34.1744 14.0557 31.7029 14.0557 30.1854C14.0557 30.1854 8.99707 31.2693 7.93477 28.0318C7.93477 28.0318 7.11094 25.9289 5.92578 25.3869C5.92578 25.3869 4.2709 24.2523 6.04141 24.274C6.04141 24.274 7.84082 24.4186 8.83086 26.1385C10.4135 28.9279 13.0656 28.1258 14.099 27.6488C14.2652 26.4926 14.735 25.6904 15.2553 25.2135C11.2156 24.7654 7.13984 24.1801 7.13984 17.2281C7.13984 15.2408 7.68906 14.2436 8.84531 12.9717C8.65742 12.502 8.04316 10.5652 9.0332 8.06484C10.5436 7.59512 14.0195 10.016 14.0195 10.016C15.4648 9.61133 17.0186 9.40176 18.5578 9.40176C20.0971 9.40176 21.6508 9.61133 23.0961 10.016C23.0961 10.016 26.5721 7.58789 28.0824 8.06484C29.0725 10.5725 28.4582 12.502 28.2703 12.9717C29.4266 14.2508 30.1348 15.248 30.1348 17.2281C30.1348 24.2018 25.8783 24.7582 21.8387 25.2135C22.5035 25.7844 23.0672 26.8684 23.0672 28.5666C23.0672 31.002 23.0455 34.0154 23.0455 34.608C23.0455 35.0777 23.3779 35.6486 24.2957 35.4824C31.5223 33.0832 36.4219 26.2252 36.4219 18.2109C36.4219 8.1877 28.292 0.578125 18.2688 0.578125ZM7.60234 25.5025C7.5084 25.5748 7.53008 25.741 7.65293 25.8783C7.76855 25.9939 7.93477 26.0445 8.02871 25.9506C8.12266 25.8783 8.10098 25.7121 7.97813 25.5748C7.8625 25.4592 7.69629 25.4086 7.60234 25.5025ZM6.82188 24.9172C6.77129 25.0111 6.84355 25.1268 6.98809 25.199C7.10371 25.2713 7.24824 25.2496 7.29883 25.1484C7.34941 25.0545 7.27715 24.9389 7.13262 24.8666C6.98809 24.8232 6.87246 24.8449 6.82188 24.9172ZM9.16328 27.4898C9.04766 27.5838 9.09102 27.8006 9.25723 27.9379C9.42344 28.1041 9.63301 28.1258 9.72695 28.0102C9.8209 27.9162 9.77754 27.6994 9.63301 27.5621C9.47402 27.3959 9.25723 27.3742 9.16328 27.4898ZM8.33945 26.4275C8.22383 26.4998 8.22383 26.6877 8.33945 26.8539C8.45508 27.0201 8.6502 27.0924 8.74414 27.0201C8.85977 26.9262 8.85977 26.7383 8.74414 26.5721C8.64297 26.4059 8.45508 26.3336 8.33945 26.4275Z" fill="#C6CBA9"/>
            </svg>
            </a>

            <a href="mailto:piyushraj26102004@gmail.com" target="_blank">
            <svg 
            className="lg:mt-[6px] sm:m-2  cursor-pointer"
            width="37" height="35" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.299 11.2271C36.5809 10.9526 37 11.2094 37 11.6432V29.75C37 32.0964 35.4463 34 33.5312 34H3.46875C1.55371 34 0 32.0964 0 29.75V11.6521C0 11.2094 0.411914 10.9615 0.700977 11.2359C2.31973 12.7766 4.46602 14.7333 11.8371 21.2943C13.3619 22.6578 15.9346 25.5266 18.5 25.5089C21.0799 25.5354 23.7031 22.6047 25.1701 21.2943C32.5412 14.7333 34.6803 12.7677 36.299 11.2271ZM18.5 22.6667C20.1766 22.7021 22.5902 20.0812 23.8043 19.001C33.3939 10.4745 34.1238 9.73073 36.3352 7.60573C36.7543 7.20729 37 6.5875 37 5.93229V4.25C37 1.90365 35.4463 0 33.5312 0H3.46875C1.55371 0 0 1.90365 0 4.25V5.93229C0 6.5875 0.245703 7.19844 0.664844 7.60573C2.87617 9.72187 3.60606 10.4745 13.1957 19.001C14.4098 20.0812 16.8234 22.7021 18.5 22.6667Z" fill="#C6CBA9"/>
            </svg>
            </a>

            <a href="https://www.linkedin.com/in/piyush-raj-07a318260/" target="_blank">
            <svg
            className="mt-[6px] sm:m-2 sm:pb-[2px] cursor-pointer"
            width="38" height="38" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.75 0.125H2.24336C1.07461 0.125 0.125 1.08789 0.125 2.26992V27.7301C0.125 28.9121 1.07461 29.875 2.24336 29.875H27.75C28.9188 29.875 29.875 28.9121 29.875 27.7301V2.26992C29.875 1.08789 28.9188 0.125 27.75 0.125ZM9.11641 25.625H4.70703V11.4273H9.12305V25.625H9.11641ZM6.91172 9.48828C5.49727 9.48828 4.35508 8.33945 4.35508 6.93164C4.35508 5.52383 5.49727 4.375 6.91172 4.375C8.31953 4.375 9.46836 5.52383 9.46836 6.93164C9.46836 8.34609 8.32617 9.48828 6.91172 9.48828ZM25.6449 25.625H21.2355V18.7188C21.2355 17.0719 21.2023 14.9535 18.9445 14.9535C16.6469 14.9535 16.2949 16.7465 16.2949 18.5992V25.625H11.8855V11.4273H16.1156V13.3664H16.1754C16.7664 12.2508 18.2074 11.0754 20.3523 11.0754C24.8148 11.0754 25.6449 14.0172 25.6449 17.8422V25.625Z" fill="#C6CBA9"/>
            </svg>
            </a>
            



            </div>

            <div className="  lg:relative lg:group lg:flex lg:justify-start sm:w-full sm:flex sm:justify-center lg:w-full lg:ml-[8vh]  ">
              <span className="cursor-pointer sm:tracking-normal mt-2 tracking-wider flex text-[#2C2C2C] lg:text-5xl sm:text-xl lg:pl-0 sm:pl-[11vh] font-bold">
                CONNECT WITH ME
              </span>

              <div className="absolute text-xl left-[11vw] mt-4 w-max max-w-xs pl-2 pr-2 bg-white text-black font-bold rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 transform -translate-x-1/2 shadow-lg tracking-normal">
                Howdy!! Its Piyush
              </div>
             
            </div>
          </div>

          <div
          ref={borderRef}
          className=" lg:absolute sm:absolute  w-full flex justify-center left-1/2 top-[28vh] lg:pt-[30vh] sm:pt-[33vh] -translate-x-1/2 -translate-y-1/2 cursor-pointer  overflow-hidden  "
          >
            <div className="transition-transform duration-500 ease-in-out hover:scale-125">
              <HoverImage />
            </div>
          </div>


          
        <div className="text-right  sm:pt-[40vh] lg:pt-[20vh] lg:pr-[2vw]">
          <h1 className="text-[#C6CBA9] lg:text-9xl sm:text-4xl lg:ml-[4vh] font-semibold tracking-wider lg:pr-[12vh] sm:pr-[24vh]">
            <Typewriter words={["DEVELOPER"]} loop={1} cursor cursorStyle="" typeSpeed={80} />
          </h1>
          <a
            href="https://www.google.com"
            target="_blank"
            className="lg:pr-[13vh] sm:mr-[24vh] relative lg:text-4xl sm:text-[17px] mt-4 block font-semibold lg:tracking-wide sm:tracking-normal"
            // style={{ position: "absolute", bottom: "48vh", right: "2rem" }}
          >
            <span 
            className="text-[#55C0BB]">Click to view my</span> <span className="text-[#DD8080]">RESUME</span>
          </a>
        </div>


          </div>
  )
}