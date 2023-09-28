import React from "react";
import aboutUs from "../Assests/about-us.jpg";

const AboutUs = () => {
  return (
    <div className="px-5">
      <div className="about-items md:flex border shadow p-5 md:space-x-8 bg-slate-200 rounded-lg">
        <div className="about-image md:w-1/3 flex items-center mb-5 md:mb-0">
          <img
            src={aboutUs}
            alt="..."
            className="object-fit h-80 w-full rounded-lg"
          />
        </div>
        <div className="about-text md:w-2/3 py-3">
          <h3 className="text-[#2E3192] text-3xl font-bold text-center mb-5 md:mb-0">
            About Us
          </h3>
          <p className="text-base mb-2">
            <b>L.E.T.C</b> was established with a great ambition of providing
            quality services in the field of education in the academic year
            2009. A team of experienced and dedicated faculties took the
            responsibility of training the aspiring students for national and
            state level Engineering and Medical Entrance Examination with great
            commitment under the visionary leadership of management of{" "}
            <b>L.E.T.C</b>.
          </p>
          <p className="text-base mb-2">
            It is very proud to mention here that today <b>L.E.T.C</b> has
            emerged as one of the most successful coaching centre in North
            Bangalore with a proven track record of results in the previous
            years.
          </p>
          <p className="text-base mb-2">
            <b>L.E.T.C</b> has become most sought and successful coaching centre
            in North Bangalore. From the year 2010 we are coaching the students
            for IX and X exams also. From this academic year IX + IIT/NEET
            Foundation and X + IIT / NEET Foundation has been started with
            greater conviction. At present hundreds of students are studying in
            our established three branches. Students of XI, XII, I PUC, II PUC,
            are being trained for various competitive exams like JEE (Main) /
            BITSAT / K—CET / COMEDK / NEET / AIIMS /JIPMER
          </p>
          <p className="text-base mb-2">
            Apart from science stream one more most popular stream among 10th
            passed out children is Commerce. Commerce stream also gives range
            ofcareer options for their future. We at LETC therefore included
            commerce stream among already existing products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
