import React, { useState, useEffect, useRef, useContext } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import letcContext from "../Context/letcContext";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeout = useRef(null);
  const { getBanner, banner } = useContext(letcContext);
  const length = 4;

  const slides =
    banner &&
    banner.map((item) => {
      return item.image;
    });

  useEffect(() => {
    getBanner();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((currentIndex) =>
        currentIndex === length - 1 ? 0 : currentIndex + 1
      );
    };

    timeout.currentIndex = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.currentIndex) {
        clearTimeout(timeout.currentIndex);
      }
    };
  }, [currentIndex, length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 4 - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === 4 - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="md:max-w-[1400px] md:h-[100vh] w-full h-[200px] m-auto relative group mb-3 mt-24 md:mt-0">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex]})`,
        }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides &&
          slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default ImageSlider;
