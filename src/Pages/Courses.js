import React, { useEffect } from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import courseTop from "../Assests/course-top.jpg";

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto py-14 mt-20 md:mt-0">
      <div className="course-img mb-10">
        <img
          src={courseTop}
          alt="..."
          className="w-full h-[250px] rounded-3xl"
        />
      </div>
      <div className="about-us mb-16">
        <h3 className="font-bold text-slate-700 text-2xl mb-5 ml-5 md:ml-0 tracking-wider">
          Our Courses
        </h3>
        <p className="px-5 md:px-0">
          Our courses are strcutured to the requirement of both beard exams and
          competitive exams. Initially the concepts are taught in detail and
          then students are exposed to different level of problems and concepts
          based questions as per the requirement of both board and competitive
          exams.
        </p>
      </div>
      <div className="school-course shadow-lg shadow-slate-300 border-2 border-slate-300 py-10 px-5 rounded-lg bg-amber-100 hover:bg-amber-300 duration-300 mb-10 mx-5 md:mx-0">
        <h3 className="font-bold text-3xl text-amber-600/90 mb-7">
          HIGH SCHOOL LEVEL COURSES
        </h3>
        <ul className="font-bold text-slate-700 text-2xl space-y-5">
          <li className="flex">
            <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
            <p>VIII State / CBSE / ICSE Board</p>
          </li>
          <li className="flex">
            <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
            <p>IX State / CBSE / ICSE Board</p>
          </li>
          <li className="flex">
            <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
            <p>X State / CBSE / ICSE Board</p>
          </li>
        </ul>
      </div>
      <div className="engineering-course shadow-lg shadow-slate-300 border-2 border-slate-300 py-10 px-5 rounded-lg bg-blue-100 hover:bg-blue-300 duration-300 mb-10 mx-5 md:mx-0">
        <h3 className="font-bold text-3xl text-[#2E3192] mb-7">
          ENGINEERING PREPARATIONS
        </h3>
        <ul className="font-bold text-slate-700 text-2xl space-y-5">
          <li className="flex">
            <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
            <p>Engineering Entrance Preparation (I / II PUC & XI / XII)</p>
          </li>
          <li className="flex">
            <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
            <p>Board Exams Preparation (I / II PUC & XI / XII)</p>
          </li>
        </ul>
      </div>
      <div className="medical-course shadow-lg shadow-slate-300 border-2 border-slate-300 py-10 px-5 rounded-lg bg-red-100 hover:bg-red-300 duration-300 mb-10 mx-5 md:mx-0">
        <h3 className="font-bold text-3xl text-[#C6272C]/90 mb-7">
          MEDICAL PREPARATIONS
        </h3>
        <ul className="font-bold text-slate-700 text-2xl space-y-5">
          <li className="flex">
            <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
            <p>Medical Entrance Preparation (I / II PUC & XI / XII)</p>
          </li>
          <li className="flex">
            <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
            <p>Board Exams Preparation (I / II PUC & XI / XII)</p>
          </li>
        </ul>
      </div>
      <div className="commerce-course shadow-lg shadow-slate-300 border-2 border-slate-300 py-10 px-5 rounded-lg bg-purple-100 hover:bg-purple-300 duration-300 mx-5 md:mx-0">
        <h3 className="font-bold text-3xl text-purple-600/90 mb-7">COMMERCE</h3>
        <ul className="font-bold text-slate-700 text-2xl space-y-5">
          <li className="flex">
            <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
            <p>Commerce XI / I PUC</p>
          </li>
          <li className="flex">
            <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
            <p>Commerce XII / II PUC</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Courses;
