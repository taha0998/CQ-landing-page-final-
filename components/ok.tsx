"use client";

import { MotionDiv, MotionH1, MotionP } from "./motion-wrapper";
import { ScrollTOButton } from "./ScrollToButton";

export default function Ok() {
  const scrollToSection = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex text-white bg-[#08090A] overflow-hidden flex-col items-center w-full">
      <div className="w-full max-w-[1100px] mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-8">
        <div className="flex mx-auto flex-col gap-8 sm:gap-6 items-center text-center">
          {/* Titre */}
          <MotionDiv
            initial={{ y: 1, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut" }}
            className="flex flex-col justify-center items-center text-center gap-2 lg:gap-5 tracking-tight mb-6"
          >
            <span
              className="block text-[60px] sm:text-[90px] md:text-[100px] lg:text-[120px] xl:text-[130px] 2xl:text-[110px] 
                           max-[380px]:text-[55px] leading-[1.1] font-[555] tracking-[-.0325em] text-balance max-w-full min-[370px]:max-[430px]:text-[65px]"
            >
              Your edge.
            </span>

            <div className="flex flex-col gap-4 lg:gap-3">
              <span
                className="block text-[#C8A97E] text-[40px] sm:text-[55px] md:text-[63px] lg:text-[70px] xl:text-[80px] 2xl:text-[80px] 
                           leading-[1.1] font-[555] tracking-[-.0325em] text-balance max-w-full"
              >
                Deployed.
              </span>

              <span
                className="block text-[#C8A97E] text-[40px] sm:text-[55px] md:text-[63px] lg:text-[70px] xl:text-[80px] 2xl:text-[80px] 
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
              className="text-[#8A8F98] text-[16px] sm:text-base md:text-[16px] xl:text-[24px] 2xl:text-[22px] font-[555] leading-relaxed mt-2 max-w-[600px]"
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
              className="mt-7"
            >
              <ScrollTOButton label="Get Early Access" />
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
