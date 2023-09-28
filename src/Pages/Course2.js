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
        <h3 className="font-bold text-slate-700 text-3xl mb-5 ml-5 md:ml-0 tracking-wider">
          Our Courses
        </h3>
        <p className="px-5 md:px-0 text-lg">
          Our courses are strcutured to the requirement of both beard exams and
          competitive exams. Initially the concepts are taught in detail and
          then students are exposed to different level of problems and concepts
          based questions as per the requirement of both board and competitive
          exams.
        </p>
      </div>
      <div className="engineering-course shadow-lg shadow-slate-300 border-2 border-slate-300 py-10 px-5 rounded-lg bg-blue-100 mb-10 mx-5 md:mx-0">
        <h3 className="font-bold text-5xl text-[#2E3192] mb-10">
          ENGINEERING PREPARATION
        </h3>
        <h4 className="font-bold text-lg text-slate-600 mb-10">
          ENGINEERING PREPARATION is the course crafted for students of I & II
          PUC and 11 & 12. This course is for the students starting their
          preparation from the scratch. The course will enhance the level of the
          student from ground to top gradually and to train them for both BOARD
          examination and ENGINEERING entrance examination.
        </h4>
        <div className="font-bold text-slate-700 text-3xl space-y-5">
          <div className="course-engineering">
            <div className="flex mb-3">
              <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
              <p>Engineering Entrance & Board Exams</p>
            </div>
            <p className="font-bold text-lg text-slate-600">
              L.E.T.C provides the best courses for IIT JEE. For grade 11 and 12
              students, our classroom programs will cover the complete JEE
              syllabus of 11th and 12th for Physics, Chemistry and Math which
              helps students to score good marks in JEE Main, Advanced and class
              12th Board exams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
