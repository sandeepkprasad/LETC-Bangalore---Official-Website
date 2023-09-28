import React from "react";
import resultTop from "../Assests/result-top.avif";
import result1 from "../Assests/Results/1.jpg";
import result2 from "../Assests/Results/2.jpg";
import result3 from "../Assests/Results/3.jpg";
import result4 from "../Assests/Results/4.jpg";
import result5 from "../Assests/Results/5.jpg";
import result6 from "../Assests/Results/6.jpg";
import result7 from "../Assests/Results/7.jpg";

const results = [
  {
    id: 1,
    img: result1,
  },
  {
    id: 2,
    img: result2,
  },
  {
    id: 3,
    img: result3,
  },
  {
    id: 4,
    img: result4,
  },
  {
    id: 5,
    img: result5,
  },
  {
    id: 6,
    img: result6,
  },
  {
    id: 7,
    img: result7,
  },
];

const Result = () => {
  return (
    <div className="container mx-auto py-14 mt-20 md:mt-0">
      <div className="reult-img mb-10">
        <img
          src={resultTop}
          alt="..."
          className="w-full h-[250px] rounded-3xl"
        />
      </div>
      <div className="about-us mb-16">
        <h3 className="font-bold text-slate-700 text-3xl mb-5 ml-5 md:ml-0 tracking-wider">
          Results - Our Topper Students
        </h3>
      </div>
      <div className="results w-full flex justify-center">
        <div className="result-item w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {results &&
            results.map((result) => {
              return (
                <div
                  className="image w-full mb-20 shadow-2xl shadow-[#2E3192] border-2 border-[#2E3192] rounded-3xl"
                  key={result.id}
                >
                  <img src={result.img} alt="..." className="rounded-3xl" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Result;
