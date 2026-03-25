"use client";
import { motion } from "motion/react";
import Image from "next/image";
import logo from "../public/Asset_514x.png";

export default function Header() {
  const scrollToSection = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex items-center justify-center md:justify-evenly z-50 w-full sticky left-0 top-0  min-[380px]:max-[740px]:gap-15  lg:gap-120  p-4 border-b border-[#1c1d1d] bg-[#0a0a0a]">
      <div className="min-w-[170px] relative top-[1.3px]">
        <Image
          src={logo}
          alt="logo"
          width={150}
          height={75}
          className="object-contain cursor-pointer"
          onClick={scrollToTop}
          priority
        />
      </div>
      <button
        onClick={scrollToSection}
        className="bg-white shadow-lg rounded-[8px]  text-[#08090a] roundedd  h-[32px] px-3 text-[11px] sm:text-xs md:text-sm hover:bg-white  cursor-pointer relative hover:bottom-[2px]   "
        style={{
          border: "1px solid #e6e6e6",
        }}
      >
        Join The WaitList
      </button>
    </div>
  );
}
