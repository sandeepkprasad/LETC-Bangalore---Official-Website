import React, { useContext, useEffect } from "react";
import letcContext from "../Context/letcContext";

const Banner = () => {
  const { getNotification, notify } = useContext(letcContext);

  useEffect(() => {
    getNotification();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full mt-5 md:mt-0 mb-14 px-10">
      <div className="w-full flex">
        <p className="px-2 py-1 bg-red-600 text-white tracking-wide font-light">
          Latest
        </p>
        <div id="scroll-container" className="bg-white w-full">
          {notify &&
            notify.slice(0, 1).map((item) => {
              return (
                <div
                  id="scroll-text"
                  className="font-bold text-base text-black tracking-widest whitespace-nowrap py-1"
                  key={item._id}
                >
                  {item.notification}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
