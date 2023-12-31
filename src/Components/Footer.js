import React from "react";
import logo from "../Assests/logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-300 w-full h-[350px] hidden md:block py-10 pl-10 space-y-5">
        <div className="w-full h-full flex space-x-20">
          <div className="w-1/3 h-full">
            <div className="img flex justify-center">
              <img
                src={logo}
                alt="..."
                className="w-16 rounded-sm mb-4 object-top"
              />
            </div>
            <div className="text-center text-sm text-slate-700 tracking-wide mb-12">
              <p className="mb-3 font-bold">
                Our aim is to assist students to develop positive attitude,
                competitive mind and special skills in clearingNational/state
                level entrance exams of reputed Engineering & Medical Colleges.
              </p>
            </div>
            <div className="link-items text-lg text-slate-900 flex justify-center">
              <ul className="flex space-x-5">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/result">Result</Link>
                </li>
                <li>
                  <Link to="/faculty">Courses</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/3 h-full text-white pl-16">
            <div className="contact">
              <h4 className="font-bold text-xl text-slate-900 tracking-wide mb-5">
                Contact with Us
              </h4>
            </div>
            <div className="contact-items text-xs text-slate-400 mb-10">
              <div className="contact mb-5">
                <p className="mb-1 font-bold text-base text-slate-700">
                  Mobile :
                </p>
                <p className="tracking-wide text-sm text-slate-500">
                  8023453597, 9342033334, 9590913334, 9342580693
                </p>
              </div>
              <div className="contact mb-5">
                <p className="mb-1 font-bold text-base text-slate-700">
                  Email :
                </p>
                <p className="tracking-wide text-sm text-slate-500">
                  www.contact@letceducation.com
                </p>
              </div>
              <div className="corporate mb-5">
                <p className="mb-1 font-bold text-base text-slate-700">
                  Corporate Office :
                </p>
                <p className="tracking-wide text-sm text-slate-500">
                  #6, Kalathur Building, Gangamma Circle, Jalahalli,<br></br>
                  Bangalore - 560013
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full flex justify-center items-center">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31093.363911492404!2d77.547084!3d13.056634000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae22b3163351bb%3A0xef143d060f5ecf06!2sL.E.T.C!5e0!3m2!1sen!2sus!4v1695879779163!5m2!1sen!2sus"
                width="250"
                height="150"
                title="footer"
                style={{ border: "0px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="rights flex justify-center text-slate-400 tracking-wide text-sm">
          <p>
            Copyright © 2023 Luminous Educational Training Centre Pvt. Ltd. |
            Developed by Sandeep Kumar
          </p>
        </div>
      </div>
      {/*For Mobile View */}
      <div className="w-full md:hidden flex justify-center">
        <div className="mobile-footer bg-[#1E2434] py-10">
          <div className="logo text-center mb-10">
            <div className="logo-img flex justify-center mb-5">
              <img src={logo} alt="logo" className="w-16 rounded" />
            </div>
            <p className="font-light text-white text-lg">
              Our aim is to assist students to develop positive attitude,
              competitive mind and special skills in clearingNational/state
              level entrance exams of reputed Engineering & Medical Colleges.
            </p>
          </div>
          {/* <div className="flex justify-center mb-10">
            <div className="quick-links">
              <h4 className="font-bold text-xl tracking-wide mb-5 text-white">
                Quick Links
              </h4>
              <div className="link-items text-base text-slate-400">
                <ul className="text-center">
                  <li className="mb-5">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="mb-5">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="mb-5">
                    <Link to="/result">Result</Link>
                  </li>
                  <li className="mb-5">
                    <Link to="/faculty">Faculty</Link>
                  </li>
                  <li className="mb-5">
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li className="mb-5">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>*/}
          <div className="flex justify-center mb-10">
            <div className="text-white text-center">
              <div className="contact">
                <h4 className="font-bold text-2xl tracking-wide mb-5">
                  Contact with Us
                </h4>
              </div>
              <div className="contact-items text-xs text-slate-400 mb-10">
                <div className="contact mb-10">
                  <p className="mb-1 font-bold text-xl">Mobile :</p>
                  <p className="tracking-wide text-lg">
                    8023453597, 9342033334, 9590913334, 9342580693
                  </p>
                </div>
                <div className="contact mb-10">
                  <p className="mb-1 font-bold text-xl">Email :</p>
                  <p className="tracking-wide text-lg">
                    www.contact@letceducation.com
                  </p>
                </div>
                <div className="corporate mb-10">
                  <p className="mb-1 font-bold text-xl">Corporate Office :</p>
                  <p className="tracking-wide text-lg">
                    #6, Kalathur Building, Gangamma Circle, Jalahalli,<br></br>
                    Bangalore - 560013
                  </p>
                </div>
              </div>
              <div className="map flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31093.363911492404!2d77.547084!3d13.056634000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae22b3163351bb%3A0xef143d060f5ecf06!2sL.E.T.C!5e0!3m2!1sen!2sus!4v1695879779163!5m2!1sen!2sus"
                  width="250"
                  height="150"
                  title="footer"
                  style={{ border: "0px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="text-center text-slate-400 tracking-wide text-sm">
            <p className="mb-1">Copyright © 2023</p>
            <p className="mb-1">
              Luminous Educational Training Centre Pvt. Ltd.
            </p>
            <p>Developed by Sandeep Kumar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
