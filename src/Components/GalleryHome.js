import React from "react";
import { useContext } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import letcContext from "../Context/letcContext";
import { useEffect } from "react";

const GalleryHome = () => {
  const { getGallery, gallery } = useContext(letcContext);

  useEffect(() => {
    getGallery();
  });

  const slideLeft = () => {
    var slider = document.getElementById("gallery-slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("gallery-slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="container mx-auto pb-14">
      <div className="heading mb-10">
        <h3 className="text-slate-700 text-4xl font-bold text-center tracking-widest">
          Gallery
        </h3>
      </div>
      <div className="gallery">
        <div className="relative flex items-center">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={40}
          />
          <div
            id="gallery-slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {gallery &&
              gallery.map((item) => (
                <img
                  className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-3xl"
                  src={`https://www.cwtrust-india.com/galleryimage/${item.image}`}
                  alt="/"
                  key={item._id}
                />
              ))}
          </div>
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryHome;
