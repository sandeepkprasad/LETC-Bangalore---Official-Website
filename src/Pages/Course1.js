import React, { useEffect } from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import courseTop from "../Assests/course-top.jpg";

const Course1 = () => {
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
      <div className="school-course shadow-lg shadow-slate-300 border-2 border-slate-300 py-10 px-5 rounded-lg bg-amber-100 mb-10 mx-5 md:mx-0">
        <h3 className="font-bold text-3xl md:text-5xl text-amber-600/90 mb-10">
          HIGH SCHOOL LEVEL COURSES
        </h3>
        <h4 className="font-bold text-sm md:text-lg text-slate-600 mb-10">
          L.E.T.C is the renowned & prestigious Tuition centre in Bangalore for
          Science, Mathematics & Commerce Tuition classes for CBSE, ICSE
          Karnataka State Board for class 8th, 9th, 10th Grade students. L.E.T.C
          is also known as an excellent study centre for Innovative and Creative
          learning with latest teaching methodologies applied.
        </h4>
        <div className="font-bold text-slate-700 text-3xl space-y-5">
          <div className="course-8">
            <div className="flex mb-3">
              <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
              <p>8th Class</p>
            </div>
            <p className="font-bold text-base md:text-lg text-slate-600">
              The complete syllabus of class 8 Maths and Science (Physics,
              Chemistry, Biology), which helps students to score good marks in
              school exams and lays a strong foundation for future entrance
              examinations. Students will be taught basic concepts, problem
              solving strategies, time management, following a study schedule,
              etc., so that they will not face any problem when they start
              preparing as per the JEE/ NEET syllabus later.
            </p>
          </div>
          <div className="course-9">
            <div className="flex mb-3">
              <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
              <p>9th Class</p>
            </div>
            <p className="font-bold text-base md:text-lg text-slate-600">
              The complete syllabus of class 9 Maths and Science (Physics,
              Chemistry, Biology), which helps students to score good marks in
              school exams and lays a strong foundation for future entrance
              examinations. Students will be taught basic concepts, problem
              solving strategies, time management, following a study schedule,
              etc., so that they will not face any problem when they start
              preparing as per the JEE/ NEET syllabus later.
            </p>
          </div>
          <div className="course-10">
            <div className="flex mb-3">
              <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
              <p>10th Class</p>
            </div>
            <p className="font-bold text-base md:text-lg text-slate-600">
              The complete syllabus of class 10 Maths and Science (Physics,
              Chemistry, Biology), which helps students to score good marks in
              school exams and lays a strong foundation for future entrance
              examinations. Students will be taught basic concepts, problem
              solving strategies, time management, following a study schedule,
              etc., so that they will not face any problem when they start
              preparing as per the JEE/ NEET syllabus later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course1;
