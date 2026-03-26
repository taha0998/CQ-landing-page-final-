type ScrollToButtonProps = {
  label: string;
};

const ScrollTOButton = ({ label }: ScrollToButtonProps) => {
  const handleScrollToSection = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <button
      onClick={handleScrollToSection}
      className=" bg-white shadow-lg rounded-[8px]  text-[#08090a] roundedd  h-[32px] px-3 sm:text-xs md:text-sm hover:bg-white  cursor-pointer relative hover:bottom-[2px]   "
      style={{
        border: "1px solid #e6e6e6",
      }}
    >
      <p className="text-[16px]"> {label}</p>
    </button>
  );
};

export { ScrollTOButton };
