import React, { useContext, useEffect } from "react";
import letcContext from "../Context/letcContext";
import { Link } from "react-router-dom";
import examsList from "../Assests/exams-sheet.jpg";
import resultTop from "../Assests/result-top.avif";

const Exam = () => {
  const { getExams, exam } = useContext(letcContext);

  useEffect(() => {
    getExams();
    // eslint-disable-next-line
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="md:p-8 py-14 mt-20 md:mt-0 space-y-20">
      <div className="exam-notifications">
        <div className="exam-img mb-10">
          <img
            src={resultTop}
            alt="..."
            className="w-full h-[250px] rounded-3xl"
          />
        </div>
        <div className="mb-16">
          <h3 className="font-bold text-slate-700 text-3xl mb-5 ml-5 md:ml-0 tracking-wider">
            Exam Notification - Get all upcoming exam updates
          </h3>
        </div>
        <div className="w-full flex justify-center px-5">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {exam &&
              exam
                .slice(0)
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
                      <p className="font-semibold text-slate-400 text-xs tracking-wider">
                        {new Date(item.date).toDateString()}
                      </p>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
      <div className="exams-list">
        <div className="mb-16">
          <h3 className="font-bold text-slate-700 text-3xl mb-5 ml-5 md:ml-0 tracking-wider">
            Exams List - Some important exams
          </h3>
        </div>
        <div className="w-full">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-1/2 flex justify-center mb-20 shadow-2xl shadow-[#2E3192] border-2 border-[#2E3192] rounded-3xl">
              <img src={examsList} alt="..." className="rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
