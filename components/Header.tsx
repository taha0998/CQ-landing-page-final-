"use client";
import { motion } from "motion/react";
import Image from "next/image";
import logo from "../public/Asset_514x.png";
import { ScrollTOButton } from "./ScrollToButton";

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
    <div className="flex items-center justify-center md:justify-evenly z-50 w-full sticky left-0 top-0 max-[380px]:gap-5  min-[380px]:max-[740px]:gap-15  lg:gap-120  py-4 border-b border-[#1c1d1d] bg-[#0a0a0a]">
      <div className="min-w-[130px] relative top-[1.3px]">
        <Image
          src={logo}
          alt="logo"
          width={130}
          height={75}
          className="object-contain cursor-pointer"
          onClick={scrollToTop}
          priority
        />
      </div>
      <ScrollTOButton label="Join The WaitList" />
    </div>
  );
}
