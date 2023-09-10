import React, { useContext, useState } from "react";
import logo from "../Assests/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import letcContext from "../Context/letcContext";

const MobileNav = () => {
  const [nav, setNav] = useState("hidden");
  const { setShowModal } = useContext(letcContext);

  const handleNav = () => {
    if (nav === "hidden") {
      setNav("block");
    } else {
      setNav("hidden");
    }
  };
  return (
    <>
      <div className="container mx-auto w-full bg-slate-100 md:hidden fixed top-0 z-40 shadow">
        <div className="navbar w-full flex justify-between items-center p-2">
          <div className="nav-logo">
            <img src={logo} alt="..." className="w-10 rounded" />
          </div>
          <div className="hamburger text-slate-700 text-4xl">
            <GiHamburgerMenu onClick={handleNav} />
          </div>
        </div>
      </div>
      <div
        className={`nav w-full h-full fixed top-0 bg-[#C6272C] ${nav} md:hidden block z-50`}
      >
        <div className="close-icon absolute top-3 right-3 text-5xl text-white">
          <AiOutlineClose onClick={handleNav} />
        </div>
        <div className="nav-items flex justify-center mt-28">
          <ul className="space-y-10 text-white text-2xl font-normal tracking-widest text-center">
            <li className="hover:text-[#2E3192]">
              <Link to="/" onClick={handleNav}>
                HOME
              </Link>
            </li>
            <li className="hover:text-[#2E3192]">
              <Link to="/about" onClick={handleNav}>
                ABOUT
              </Link>
            </li>
            <li className="hover:text-[#2E3192]">
              <div className="dropdown">
                <span className="flex items-center">
                  OUR COURSES
                  <MdArrowForwardIos className="ml-1" />
                </span>
                <div className="dropdown-content text-white text-xs font-normal tracking-widest space-y-5">
                  <p>
                    <Link
                      to="/courses"
                      className="flex items-center"
                      onClick={handleNav}
                    >
                      HIGH SCHOOL LEVEL
                      <MdArrowForwardIos className="ml-1" />
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/courses"
                      className="flex items-center"
                      onClick={handleNav}
                    >
                      ENGINEERING PREPARATIONS
                      <MdArrowForwardIos className="ml-1" />
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/courses"
                      className="flex items-center"
                      onClick={handleNav}
                    >
                      MEDICAL PREPARATIONS
                      <MdArrowForwardIos className="ml-1" />
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/courses"
                      className="flex items-center"
                      onClick={handleNav}
                    >
                      COMMERCE <MdArrowForwardIos className="ml-1" />
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className="hover:text-[#2E3192]">
              <Link to="/results" onClick={handleNav}>
                RESULT
              </Link>
            </li>
            <li className="hover:text-[#2E3192]">
              <Link to="/exam" onClick={handleNav}>
                EXAM NOTIFICATION
              </Link>
            </li>
            <li className="hover:text-[#2E3192]">
              <Link to="/gallery" onClick={handleNav}>
                GALLERY
              </Link>
            </li>
            <li className="hover:text-[#2E3192]">
              <Link to="/contact" onClick={handleNav}>
                CONTACT
              </Link>
            </li>
            <li>
              <button
                className="text-white bg-[#2E3192] px-4 py-2 rounded tracking-wide shadow-lg animate-bounce"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Enquiry Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
