import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import student1 from "../Assests/Students/ajay.png";
import student2 from "../Assests/Students/arushi.png";
import student3 from "../Assests/Students/jewel.png";
import student4 from "../Assests/Students/nikhitha.png";
import student5 from "../Assests/Students/prajit.png";
import student6 from "../Assests/Students/ratna.png";
import student7 from "../Assests/Students/sadaf.png";
import student8 from "../Assests/Students/shalette.jpg";
import student11 from "../Assests/Students/vibhav.png";

const data = [
  {
    id: 1,
    img: student1,
    name: "Ajay Shastry",
    rank: "K-CET Eng 720",
    text: "I joined LETC in my 2nd PUC. The atmosphere inLETC was me to work hard. The regular test and the materials was helpful for me, to achieve a decent rank in K-CET. Thankyou LETC.",
  },
  {
    id: 2,
    img: student2,
    name: "Arushi Ghosh",
    rank: "KCET-MED 853",
    text: "It is very difficult for me to convey my feelings about LETC in just 2-3 lines. But, i would just like to say that whatever i am today, it's just because of LETC and the wonderful teachers out there. They are the best teachers i have ever seen or met in my life. I would always be thankful to LETC.",
  },
  {
    id: 3,
    img: student3,
    name: "Jewel Johns",
    rank: "KCET-MED 649",
    text: "My experience at LETC will be cherished for long. The teachers in LETC epitomized execllence in their field. Their motivational and unrelenting support is the true secret behing my success. LETC does not believe going overboard with rote memorization of facts rather, strive to hekp us achieve conceptual clarity and putting the same into use in the entrance exams which is the ultimate goal of any coaching programme. If you have chosen LETC you have put your career into right hands.",
  },
  {
    id: 4,
    img: student4,
    name: "Nikhitha Pandey",
    rank: "KCET-MED 893",
    text: "I joined this institute in XII standard which is the most important exam for any student. I chose this institution because it never boasts about its achievement. I have never regretted for joining LETC.",
  },
  {
    id: 5,
    img: student5,
    name: "Prajit TR",
    rank: "KCET-ENG 737",
    text: "I was a student of LETC for three years and rewarding experience. Emphasis was given on conceptual learning and not on memorising and that has helped me achieve my dreams. All the faculties are highly competent and approachable. The library has good resources. Overall, I am satisfied with all facilities and services provided.",
  },
  {
    id: 6,
    img: student6,
    name: "Ratna Saikia",
    rank: "KCET-MED 882",
    text: "I would like to share some expreince about LETC. A wonderful set of teachers made my dream come true. They trained me so well that i could crack the entrance exams and grab a seat in a medical college. All the three years of my coaching were quite smooth. Even in their busy schedule the faculties always found time to clear all my doubts no matter how many times i asked them.",
  },
  {
    id: 7,
    img: student7,
    name: "Sadaf Khatoon",
    rank: "KCET-MED 708",
    text: "A student of LETC would like to thank my institute for my success in KCET and for getting 708 rank in medical. I have received a great academic guidance and motivation from all the faculties and management team. In the last year all the team members have supported me and been with me throughout the year which has enabled me to get such a good result. Truly, it was a great experience to be in LETC. I strongly recommend LETC to all the Medical and Engineering aspirants.",
  },
  {
    id: 8,
    img: student8,
    name: "Shalette Natasha Dsouza",
    rank: "CET 1879 Eng",
    text: "As a student who struggled with the pursue of studying in 2nd PUC & preparing for various competitive entrance exams, joining LETC was extremely beneficial. The Teachers were not just knowledgable, but also skilled in traning students. They showed interest in their subjects as well as each and every student learning there. The mock test and exams that were conducted on regular basis prepared us to face the real deal. Thanks to the teachers and staff at LETC, I can look at back and say that my 2nd year PUC wasn't as stressful as it might've been. Thank you for everything.",
  },
  {
    id: 9,
    img: student11,
    name: "Vibhav Kumar Sah",
    rank: "KCET-ENG 359",
    text: "I am currently studying in NIT suratkal in the department of computer science. In LETC all teachers are highly educated and very helpful. They used to communicate effeciently regarding class timings, text timings and other important informations through messages to our parents cell phones. The study material is very informative and helpful. There was a very healthy competitive in every test contucted. Multiple choice questions discussions that used to take place after completetion of every chapter kept us well prepared for JEE and CET. On top of all, Sunday test kept us on our toes throughout the year which culminated in excellent result.",
  },
];

const Students = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 330;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 330;
  };
  return (
    <div className="pb-14">
      <div className="heading mb-10">
        <h3 className="text-slate-700 text-2xl md:text-4xl font-bold text-center tracking-widest">
          Students Success Story
        </h3>
      </div>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-3"
        >
          {data.map((item) => (
            <div
              className="inline-block md:w-1/4 h-[350px] align-top shadow-lg shadow-slate-300 border-2 border-slate-300 p-3 rounded-lg bg-blue-100"
              key={item.id}
            >
              <div className="w-full ">
                <div className="flex mb-3">
                  <div className="img mr-3">
                    <img
                      className="w-[75px] inline-block rounded-full"
                      src={item.img}
                      alt="..."
                    />
                  </div>
                  <div className="name-rank">
                    <h5 className="font-bold tracking-wider mb-2">
                      {item.name}
                    </h5>
                    <h5 className="font-medium text-[#C6272C]/80">{item.rank}</h5>
                  </div>
                </div>
                <div className="student-text">
                  <p className="text-xs w-full whitespace-normal">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  );
};

export default Students;
