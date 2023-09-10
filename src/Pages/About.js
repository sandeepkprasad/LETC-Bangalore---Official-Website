import React, { useEffect } from "react";
import aboutTop from "../Assests/about-top.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto py-14 mt-20 md:mt-0">
      <div className="about-img mb-10">
        <img
          src={aboutTop}
          alt="..."
          className="w-full h-[250px] rounded-3xl"
        />
      </div>
      <div className="about-us mb-16">
        <h3 className="font-bold text-slate-700 text-2xl mb-5 ml-5 md:ml-0 tracking-wider">
          About - L.E.T.C
        </h3>
        <p className="mb-5 px-5 md:px-0">
          <b>L.E.T.C</b> was established with a great ambition of providing
          quality services in the field of education in the academic year 2009.
          A team of experienced and dedicated faculties took the responsibility
          of training the aspiring students for national and state level
          Engineering and Medical Entrance Examination with great commitment
          under the visionary leadership of management of <b>L.E.T.C</b>.
        </p>
        <p className="mb-5 px-5 md:px-0">
          It is very proud to mention here that today <b>L.E.T.C</b> has emerged
          as one of the most successful coaching centre in North Bangalore with
          a proven track record of results in the previous years.
        </p>
        <p className="mb-5 px-5 md:px-0">
          <b>L.E.T.C</b> has become most sought and successful coaching centre
          in North Bangalore. From the year 2010 we are coaching the students
          for IX and X exams also. From this academic year IX + IIT/NEET
          Foundation and X + IIT / NEET Foundation has been started with greater
          conviction. At present hundreds of students are studying in our
          established three branches. Students of XI, XII, I PUC, II PUC, are
          being trained for various competitive exams like JEE (Main) / BITSAT /
          K—CET / COMEDK / NEET / AIIMS /JIPMER
        </p>
        <p className="mb-5 px-5 md:px-0">
          Apart from science stream one more most popular stream among 10th
          passed out children is Commerce. Commerce stream also gives range
          ofcareer options for their future. We at LETC therefore included
          commerce stream among already existing products.
        </p>
      </div>
      <div className="w-full md:flex justify-center md:space-x-5">
        <div className="vision md:w-1/2 text-center mb-10 md:mb-0 bg-blue-100 p-5 rounded-lg">
          <h4 className="font-bold text-2xl text-[#2E3192] mb-3 tracking-wider">
            OUR VISION
          </h4>
          <p className="font-medium">
            Our aim is to assist students to develop positive attitude,
            competitive mind and special skills in clearing National/State level
            entrance exams of reputed Engineering and Medical colleges.
          </p>
        </div>
        <div className="vision md:w-1/2 text-center bg-blue-100 p-5 rounded-lg">
          <h4 className="font-bold text-2xl text-[#2E3192] mb-3 tracking-wider">
            OUR STRENGTH
          </h4>
          <p className="font-medium">Our strength is our faculty and staffs.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
