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
      <div className="commerce-course shadow-lg shadow-slate-300 border-2 border-slate-300 py-10 px-5 rounded-lg bg-purple-100 mx-5 md:mx-0">
        <h3 className="font-bold text-5xl text-purple-600/90 mb-10">
          COMMERCE
        </h3>
        <h4 className="font-bold text-lg text-slate-600 mb-10">
          COMMERCE is defined as the exchange of goods and services among
          individuals and business entities. In academics, Commerce is
          considered to be one of the most popular streams of education along
          with Science and Arts. Commerce deals with the various aspects of
          business, trade, accounting, financial information/transactions and
          merchandising. Commerce plays a significant role in the development of
          nations and its citizens by facilitating trade between nations or
          within the nation.<br></br>
          L.E.T.C is the renowned & prestigious Tuition centre in Bangalore for
          Commerce Tuition classes for CBSE, ICSE Karnataka State Board for
          class I & II PUC and 11 & 12 Grade students. L.E.T.C is also known as
          an excellent study centre for Innovative and Creative learning with
          latest teaching methodologies applied.
        </h4>
        <div className="font-bold text-slate-700 text-2xl space-y-5">
          <div className="commerce">
            <div className="flex mb-3">
              <TbArrowBadgeRightFilled className="text-[#C6272C] text-3xl mr-3" />
              <p>Commerce Class</p>
            </div>
            <div className="font-bold text-lg text-slate-600 space-y-3">
              <p>
                Commerce Course is designed to provide students with a
                comprehensive understanding of the principles and practices of
                commerce. It equips them with the knowledge and skills needed to
                excel in the commerce exam. The course covers various topics,
                including financial accounting, business management, marketing,
                and economics. The commerce syllabus is designed to be both
                theoretical and practical, allowing students to apply their
                knowledge to real-world situations.
              </p>
              <p>
                The Class 11 & 12 and I & II PUC Commerce Exam is an important part of the
                course as it assesses a student's knowledge and understanding of
                the subject matter covered in the course. It is a comprehensive
                test that covers all the major topics and is designed to
                determine a student's readiness to enter the workforce or
                continue their studies in a higher-level program.
              </p>
              <p>
                The best commerce courses provide students with effective and
                efficient study materials, such as practice tests and exam
                guides, to help them prepare for the exam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
