"use client";

import { MotionDiv, MotionH1, MotionP } from "./motion-wrapper";
import { easeInOut } from "framer-motion";

export default function QuickInfoTwoCols() {
  return (
    <MotionDiv
      className="flex text-white bg-[#08090A] overflow-hidden flex-col items-center w-full "
      variants={containerVariants} // <-- animation parent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full">
        <div className="flex flex-col  items-center gap-8">
          <div>
            <h1
              className="text-4xl sm:text-4xl md:text-5xl lg:text-[53px] xl:text-[77px]  2xl:text-[81px]
                    font-[555] tracking-[-.0325em] text-balance text-center"
            >
              This isn’t software. It’s a collective brain
            </h1>
          </div>
          <MotionDiv
            className="flex-1 w-full max-w-[600px] lg:min-w-[1000px] aspect-video bg-[#1C1D1E] rounded-lg overflow-hidden"
            variants={itemVariants} // <-- animation fade + slide
          >
            <video
              src="https://delicate-bombolone-7a37e8.netlify.app/ma-video.mp4"
              className="w-full h-full object-cover"
              controls
            />
          </MotionDiv>
          {/* Texte à gauche */}
          <MotionDiv
            className="flex-1 flex flex-col justify-center items-center text-center gap-4"
            variants={itemVariants} // <-- animation fade + slide
          >
            {/* Titre principal */}
            <MotionH1 className="font-bold tracking-tight">
              <span className="block text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.05] mt-2">
                See what's possible.
              </span>
            </MotionH1>

            {/* Description */}
            <MotionP className="text-[#8A8F98] text-sm sm:text-base xl:text-xl 2xl:text-2xl font-[555] leading-relaxed mt-2  max-w-[500px] lg:max-w-[900px]">
              Watch how a prediction goes from idea to live market — and how
              contributors get rewarded for every signal that performs.
            </MotionP>
          </MotionDiv>
        </div>
      </div>
    </MotionDiv>
  );
}

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // animation cascade
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};
