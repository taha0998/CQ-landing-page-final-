"use client";

import { MotionDiv, MotionH1, MotionP } from "./motion-wrapper";

export default function Ok() {
  const scrollToSection = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex text-white bg-[#08090A] overflow-hidden flex-col items-center w-full">
      <div className="w-full max-w-[1100px] mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-8">
        <div className="flex mx-auto flex-col gap-8 sm:gap-6 md:gap-10 items-center text-center">
          {/* Titre */}
          <MotionDiv
            initial={{ y: 1, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut" }}
            className="flex flex-col justify-center items-center text-center gap-2 lg:gap-5 tracking-tight mb-6"
          >
            <span
              className="block text-[58px] sm:text-[121.5px] md:text-[121.5px] lg:text-[182.25px] xl:text-[182.25px] 2xl:text-[182.25px] 
                           leading-[1.1] font-[555] tracking-[-.0325em] text-balance max-w-full min-[370px]:max-[430px]:text-[65px]"
            >
              Your edge.
            </span>

            <div className="flex gap-10">
              <span
                className="block text-[23px] sm:text-5xl md:text-[36px] lg:text-[54px] xl:text-[54px] 2xl:text-[54px] 
                           leading-[1.1] font-[555] tracking-[-.0325em] text-balance max-w-full"
              >
                Deployed.
              </span>

              <span
                className="block text-[23px] sm:text-5xl md:text-[36px] lg:text-[54px] xl:text-[54px] 2xl:text-[54px] 
                           leading-[1.1] font-[555] tracking-[-.0325em] text-balance max-w-full"
              >
                Rewarded.
              </span>
            </div>
          </MotionDiv>

          {/* Description */}
          <div className="flex flex-col gap-3 lg:gap-5">
            <MotionP
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.1 }}
              className="text-[#8A8F98] text-sm sm:text-base md:text-[16px] md:max-w-150 xl:text-[24px] 2xl:text-[24px] font-[555] leading-relaxed mt-2 max-w-[800px]"
            >
              Submit your market predictions, compete on live performance, and
              earn CQXT tokens for every signal that moves the algorithm
              forward.
            </MotionP>
            {/* Bouton */}
            <MotionDiv
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.2 }}
            >
              <button
                onClick={scrollToSection}
                className="bg-white text-black px-4 py-2 sm:px-4 sm:py-2.5 font-semibold rounded-[8px] cursor-pointer relative hover:bottom-[2px] transition"
              >
                <span className=" md:text-[16px] lg:text-[24px]">
                  Get Early Access
                </span>
              </button>
            </MotionDiv>
            {/* Texte secondaire */}
            <MotionP
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 0.3 }}
              className="text-[#5F6163] text-sm"
            >
              Launching soon — founding spots are limited
            </MotionP>
          </div>
        </div>
      </div>
    </div>
  );
}
