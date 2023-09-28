import React, { useEffect } from "react";
import aboutTop from "../Assests/about-top.jpg";
import directorImg from "../Assests/director-img.jpg";

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
        <h3 className="font-bold text-slate-700 text-3xl mb-5 ml-5 md:ml-0 tracking-wider">
          About - L.E.T.C
        </h3>
        <p className="mb-5 px-5 md:px-0 text-lg">
          <b>L.E.T.C</b> was established with a great ambition of providing
          quality services in the field of education in the academic year 2009.
          A team of experienced and dedicated faculties took the responsibility
          of training the aspiring students for national and state level
          Engineering and Medical Entrance Examination with great commitment
          under the visionary leadership of management of <b>L.E.T.C</b>.
        </p>
        <p className="mb-5 px-5 md:px-0 text-lg">
          It is very proud to mention here that today <b>L.E.T.C</b> has emerged
          as one of the most successful coaching centre in North Bangalore with
          a proven track record of results in the previous years.
        </p>
        <p className="mb-5 px-5 md:px-0 text-lg">
          <b>L.E.T.C</b> has become most sought and successful coaching centre
          in North Bangalore. From the year 2010 we are coaching the students
          for IX and X exams also. From this academic year IX + IIT/NEET
          Foundation and X + IIT / NEET Foundation has been started with greater
          conviction. At present hundreds of students are studying in our
          established three branches. Students of XI, XII, I PUC, II PUC, are
          being trained for various competitive exams like JEE (Main) / BITSAT /
          K—CET / COMEDK / NEET / AIIMS /JIPMER
        </p>
        <p className="mb-5 px-5 md:px-0 text-lg">
          Apart from science stream one more most popular stream among 10th
          passed out children is Commerce. Commerce stream also gives range
          ofcareer options for their future. We at LETC therefore included
          commerce stream among already existing products.
        </p>
      </div>
      <div className="w-full md:flex justify-center md:space-x-5 mb-20">
        <div className="vision md:w-1/2 text-center mb-10 md:mb-0 bg-blue-100 p-5 rounded-lg">
          <h4 className="font-bold text-3xl text-[#2E3192] mb-3 tracking-wider">
            OUR VISION
          </h4>
          <p className="font-medium text-lg">
            Our aim is to assist students to develop positive attitude,
            competitive mind and special skills in clearing National/State level
            entrance exams of reputed Engineering and Medical colleges.
          </p>
        </div>
        <div className="vision md:w-1/2 text-center bg-blue-100 p-5 rounded-lg">
          <h4 className="font-bold text-3xl text-[#2E3192] mb-3 tracking-wider">
            OUR STRENGTH
          </h4>
          <p className="font-medium text-lg">
            Our strength is our faculty and staffs.
          </p>
        </div>
      </div>
      <div className="w-full md:flex justify-around space-y-10 md:space-y-0 px-3 md:px-0">
        <div className="w-full md:w-1/2 space-y-3">
          <img src={directorImg} alt="..." className="rounded-2xl" />
          <p className="font-bold text-lg text-slate-900">
            Mr. XYZ, Director L.E.T.C
          </p>
        </div>
        <div className="w-full md:w-1/2 space-y-5 text-lg text-slate-900">
          <p>
            It's our immense pleasure to introduce <b>L.E.T.C</b> as a leader in
            career making of thousands of students in IIT, NEET & OTHER
            Competitive Exams. It became favourite institution amongst young
            generation for preparation of competitive exams.
          </p>
          <p>
            We understand that the previous year exam papers can give the
            glimpse of the pattern of exams, beside this, targeted preparation
            under expert guidance coupled with unmatched study materials makes
            the task much easier.
          </p>
          <p>
            At <b>L.E.T.C</b> we are committed to providing you the best in the
            field whether it is the classroom atmosphere, the quality of
            lectures, the study materials the test series, the guidance &
            information.
          </p>
          <p>
            <b>L.E.T.C</b> Consistently been the hundred percent benchmark
            setter in the past decade and with our innovation approaches and
            consistent efforts we will continue to define the future of quality
            education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
