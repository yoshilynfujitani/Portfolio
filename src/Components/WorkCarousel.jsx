import React, { useEffect, useState } from "react";
import works from "../Pages/Works";
import Featured from "./Featured";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMdScreen, setIsMdScreen] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.matchMedia("(min-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let intervalId;

    if (isMdScreen) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex < works.length - 3 ? prevIndex + 1 : 0
        );
      }, 5000);
    } else {
      setCurrentIndex(0); // Reset to the first slide if not medium screen
    }

    // Clean up the interval on component unmount or when screen size changes
    return () => {
      clearInterval(intervalId);
    };
  }, [isMdScreen]);

  const nextSlide = () => {
    if (currentIndex < works.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full ">
      <div className="overflow-hidden">
        <div
          className="transition-transform duration-300 flex flex-col gap-2 md:flex-row md:gap-0"
          style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
        >
          {works.slice(0, isMdScreen ? undefined : 3).map((item) => (
            <div key={item.id} className="md:w-1/3 md:flex-shrink-0 ">
              <div className="h-full flex items-center justify-center">
                <Featured {...item} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:flex">
        <button
          onClick={prevSlide}
          className={`${
            currentIndex === 0 ? "hidden" : ""
          } absolute transition-all ease-in duration-100 top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 text-3xl text-subtext hover:scale-110 hover:text-lightModeMainText rounded-full shadow-lg dark:hover:text-darkModeMainText`}
        >
          <FaArrowAltCircleLeft />
        </button>

        <button
          onClick={nextSlide}
          className={`${
            currentIndex === works.length - 3 ? "hidden" : ""
          } absolute transition-all ease-in duration-100 top-1/2 right-0 transform -translate-y-1/2 translate-x-4 text-3xl text-subtext hover:scale-110 hover:text-lightModeMainText rounded-full shadow-lg dark:hover:text-darkModeMainText`}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default WorkCarousel;
