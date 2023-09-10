import React, { useEffect, useContext } from "react";
import letcContext from "../Context/letcContext";

const Gallery = () => {
  const { getGallery, gallery } = useContext(letcContext);

  useEffect(() => {
    getGallery();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="md:pl-8 py-14 mt-20 md:mt-0 bg-blue-100">
      <div className="about-us mb-16">
        <h3 className="font-bold text-slate-700 text-2xl mb-5 ml-5 md:ml-0 tracking-wider">
          Our Memories
        </h3>
      </div>
      <div className="gallery w-full h-full flex justify-center px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {gallery &&
            gallery.map((item) => {
              return (
                <img
                  src={`https://letc-backend.onrender.com/galleryimage/${item.image}`}
                  alt="..."
                  className="w-[440px] md:w-[220px] rounded-3xl cursor-pointer md:hover:scale-150 ease-in-out duration-300 mb-3"
                  key={item._id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
