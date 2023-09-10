import React from "react";
import counter from "../Assests/counter.jpg";
import CountUp from "react-countup";

const DataCounter = () => {
  return (
    <div className="h-[250px] w-full m-auto relative mb-14">
      <div
        className="w-full h-full bg-center bg-cover opacity-90 pt-5 md:pt-0"
        style={{ backgroundImage: `url(${counter})` }}
      >
        <div className="flex justify-center md:space-x-40 space-x-16 py-16">
          <div className="student-counter">
            <h1 className="text-amber-400 font-bold text-3xl md:text-7xl mb-3 md:tracking-widest">
              <CountUp start={0} end={5000} duration={10} />+
            </h1>
            <h4 className="text-white font-bold text-xl md:text-3xl md:tracking-widest">
              Students
            </h4>
          </div>
          <div className="student-counter">
            <h1 className="text-amber-400 font-bold text-3xl md:text-7xl mb-3 md:tracking-widest">
              <CountUp start={0} end={5} duration={10} />+
            </h1>
            <h4 className="text-white font-bold text-xl md:text-3xl md:tracking-widest">
              Courses
            </h4>
          </div>
          <div className="student-counter">
            <h1 className="text-amber-400 font-bold text-3xl md:text-7xl mb-3 md:tracking-widest">
              <CountUp start={0} end={100} duration={10} />
            </h1>
            <h4 className="text-white font-bold text-xl md:text-3xl md:tracking-widest">
              Faculty
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCounter;
