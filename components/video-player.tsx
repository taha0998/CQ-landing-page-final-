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
      <div
        className="w-full pt-14 sm:pt-40"
        style={{
          background: "linear-gradient(to bottom, #ffffff0d, transparent 20%)",
        }}
      >
        <div className="flex flex-col  items-center gap-14 sm:gap-20">
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
