import { MotionDiv, MotionH1, MotionP } from "./motion-wrapper";

import Dashboard from "./dashboard";
import VideoPlayer from "./video-player";

export default function Hero() {
  return (
    <div
      className="w-full flex text-[#f7f8f8] overflow-hidden flex-col justify-center  items-center mt-30"
      style={{
        background: "linear-gradient(to bottom, #ffffff0d, transparent 20%)",
      }}
    >
      {/* <div className="flex flex-col w-full bg-black justify-center items-center  mt-20 sm:mt-32 md:mt-40 px-4 sm:px-6 lg:px-8"> */}
      {/* <div className="text-[#f7f8f8] flex  flex-col justify-center gap-1 sm:gap-6 md:gap-1 items-center text-center md:items-center  md:text-start"> */}
      <MotionDiv
        initial={{
          y: 10,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="flex flex-col w-full justify-center items-center mt-30  gap-5 md:mb-20"
        // className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl  2xl:text-[81px]
        //                leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1]
        //                font-[555] tracking-[-.0325em] text-balance
        //                max-w-full  sm:max-w-3xl md:max-w-4xl md:text-nowrap  lg:max-w-7xl "
      >
        <h1
          className="text-[34px] sm:text-4xl md:text-4xl lg:text-[81px] xl:text-[81px]  2xl:text-[101.25px]
        font-[555] tracking-[-.0325em] text-balance text-center"
        >
          From idea to markets in 60 minutes.
        </h1>
        <h1
          className="text-[34px] sm:text-4xl md:text-5xl lg:text-[51.84px] xl:text-[64.8px]  2xl:text-[81px]
        font-[555] tracking-[-.0325em] text-balance text-center"
        >
          Co-build the algorithm compete earn
        </h1>
      </MotionDiv>

      <MotionDiv
        initial={{
          y: 10,
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="  relative
    lg:scale-100 
    max-w-[500px]  
    sm:max-w-[1000px]  
    
    lg:max-w-[1000px]
    xl:max-w-[1300px] 
    2xl:max-w-[1600px]
    mt-16 px-4 sm:px-6 lg:px-8
     h-[50vh] sm:h-auto
    before:content-[''] 
    before:absolute 
    before:w-[200%] 
    before:h-[80%] 
    before:left-0 
    before:-bottom-[14%] 
    before:bg-gradient-to-t 
    before:from-[#09090a] 
    before:to-transparent 
    before:pointer-events-none 
    before:z-50  "
      >
        <Dashboard />
      </MotionDiv>
    </div>
  );
}
