import React, { useContext, useEffect } from "react";
import letcContext from "../Context/letcContext";
import { Link } from "react-router-dom";

const ExamHome = () => {
  const { getExams, exam } = useContext(letcContext);

  useEffect(() => {
    getExams();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="w-full mt-5 mb-14 px-10">
      <div className="exam-notifications">
        <div className="mb-8">
          <h3 className="font-bold text-slate-700 text-2xl mb-5 tracking-wider">
            Latest Updates
          </h3>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {exam &&
              exam
                .slice(0, 4)
                .reverse()
                .map((item) => {
                  return (
                    <div
                      className="exam-notifications w-full space-y-3"
                      key={item._id}
                    >
                      <p className="font-bold text-lg text-[#2E3192] tracking-wider break-words">
                        {item.text}
                      </p>
                      <Link
                        to={item.link}
                        target="_blank"
                        className="font-bold blink text-sm text-red-500 tracking-wider"
                      >
                        Click here
                      </Link>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamHome;
