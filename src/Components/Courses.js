import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="container mx-auto py-14">
      <div className="heading mb-10">
        <h3 className="text-slate-700 text-4xl font-bold text-center tracking-widest">
          Our Courses
        </h3>
      </div>
      <div className="courses md:flex md:flex-row md:space-x-10 space-y-7 md:space-y-0 px-3 md:px-0 mb-7 md:mb-10">
        <div className="md:w-1/2 shadow-lg shadow-slate-300 border-2 border-slate-300 text-center py-10 rounded-lg bg-amber-100 hover:bg-amber-300 hover:scale-105 duration-300">
          <Link to="/courses/course-1">
            <h4 className="font-bold text-4xl text-amber-600/90 mb-5 tracking-wider">
              HIGH SCHOOL LEVEL
            </h4>
            <h4 className="font-bold text-3xl text-black/80 tracking-widest mb-3">
              VIII, XI & X Class
            </h4>
            <h4 className="font-bold text-xl text-slate-500 tracking-widest">
              CBSE | ICSE | State
            </h4>
          </Link>
        </div>
        <div className="md:w-1/2 shadow-lg shadow-slate-300 border-2 border-slate-300 text-center py-10 rounded-lg bg-blue-100 hover:bg-blue-300 hover:scale-105 duration-300">
          <Link to="/courses/course-2">
            <h4 className="font-bold text-4xl text-[#2E3192]/90 mb-5 tracking-wider">
              ENGINEERING PREPARATION
            </h4>
            <h4 className="font-bold text-3xl text-black/80 tracking-widest mb-3">
              Entrance + Board Exam
            </h4>
            <h4 className="font-bold text-xl text-slate-500 tracking-widest">
              I & II PUC | XI & XII
            </h4>
          </Link>
        </div>
      </div>
      <div className="courses md:flex md:flex-row md:space-x-10 space-y-7 md:space-y-0 px-3 md:px-0">
        <div className="md:w-1/2 shadow-lg shadow-slate-300 border-2 border-slate-300 text-center py-10 rounded-lg bg-red-100 hover:bg-red-300 hover:scale-105 duration-300">
          <Link to="/courses/course-3">
            <h4 className="font-bold text-4xl text-[#C6272C]/90 mb-5 tracking-wider">
              MEDICAL PREPARATION
            </h4>
            <h4 className="font-bold text-3xl text-black/80 tracking-widest mb-3">
              Entrance + Board Exam
            </h4>
            <h4 className="font-bold text-xl text-slate-500 tracking-widest">
              I & II PUC | XI & XII
            </h4>
          </Link>
        </div>
        <div className="md:w-1/2 shadow-lg shadow-slate-300 border-2 border-slate-300 text-center py-10 rounded-lg bg-purple-100 hover:bg-purple-300 hover:scale-105 duration-300">
          <Link to="/courses/course-4">
            <h4 className="font-bold text-4xl text-purple-600/90 mb-5 tracking-wider">
              COMMERCE
            </h4>
            <h4 className="font-bold text-3xl text-black/80 tracking-widest mb-3">
              I & II PUC | XI & XII
            </h4>
            <h4 className="font-bold text-xl text-slate-500 tracking-widest">
              CBSE | ICSE | State
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
