import React, { useContext, useEffect } from "react";
import letcContext from "../Context/letcContext";
import { Link } from "react-router-dom";
import examsList from "../Assests/exams-sheet.jpg";

const Exam = () => {
  const { getExams, exam } = useContext(letcContext);

  useEffect(() => {
    getExams();
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="md:pl-8 py-14 mt-20 md:mt-0 bg-blue-100 space-y-20">
      <div className="exam-notifications">
        <div className="mb-16">
          <h3 className="font-bold text-slate-700 text-2xl mb-5 ml-5 md:ml-0 tracking-wider">
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
                      <p className="font-bold text-base text-[#2E3192] tracking-wider break-words">
                        {item.text}
                      </p>
                      <Link
                        to={item.link}
                        target="_blank"
                        className="font-medium blink text-xs text-red-500 tracking-wider"
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
          <h3 className="font-bold text-slate-700 text-2xl mb-5 ml-5 md:ml-0 tracking-wider">
            Exams List - Some important exams
          </h3>
        </div>
        <div className="w-full flex justify-center">
          <div className="result-item w-full grid grid-cols-1 md:grid-cols-2">
            <div className="w-full mb-20 shadow-2xl shadow-[#2E3192] border-2 border-[#2E3192] rounded-3xl">
              <img src={examsList} alt="..." className="rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
