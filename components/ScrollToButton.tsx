import clsx from "clsx";

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
      className={clsx(
        "bg-white shadow-lg rounded-[8px] sm:text-[16px]  text-[#08090a] roundedd  sm:h-[32px] px-3 sm:text-xs md:text-sm hover:bg-white  cursor-pointer relative hover:bottom-[2px] ",
        {
          "size-40 text-[15px] h-[28px]": label === "Join The WaitList",
          "h-[32px]": label !== "Join The WaitList",
        },
      )}
      style={{
        border: "1px solid #e6e6e6",
      }}
    >
      <p> {label}</p>
    </button>
  );
};

export { ScrollTOButton };
