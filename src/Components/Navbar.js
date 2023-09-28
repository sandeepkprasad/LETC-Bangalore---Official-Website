import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-white hidden md:block mb-3">
      <div className="container mx-auto flex justify-center h-10">
        <div className="nav-items flex items-center">
          <ul className="flex space-x-10 text-black text-base font-bold tracking-widest">
            <li className="hover:text-[#2E3192]">
              <Link to="/">HOME</Link>
            </li>
            <li className="hover:text-[#2E3192]">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="hover:text-[#2E3192]">
              <div className="dropdown">
                <span className="flex items-center">
                  OUR COURSES
                  <MdArrowForwardIos className="ml-1" />
                </span>
                <div className="dropdown-content text-white text-sm font-normal tracking-widest space-y-5">
                  <p>
                    <Link to="/courses/course-1" className="flex items-center">
                      HIGH SCHOOL LEVEL
                      <MdArrowForwardIos className="ml-1" />
                    </Link>
                  </p>
                  <p>
                    <Link to="/courses/course-2" className="flex items-center">
                      ENGINEERING PREPARATION
                      <MdArrowForwardIos className="ml-1" />
                    </Link>
                  </p>
                  <p>
                    <Link to="/courses/course-3" className="flex items-center">
                      MEDICAL PREPARATION
                      <MdArrowForwardIos className="ml-1" />
                    </Link>
                  </p>
                  <p>
                    <Link to="/courses/course-4" className="flex items-center">
                      COMMERCE <MdArrowForwardIos className="ml-1" />
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className="hover:text-[#2E3192]">
              <Link to="/results">RESULT</Link>
            </li>
            <li className="hover:text-[#2E3192]">
              <Link to="/exam">EXAM NOTIFICATION</Link>
            </li>
            <li className="hover:text-[#2E3192]">
              <Link to="/gallery">GALLERY</Link>
            </li>
            <li className="hover:text-[#2E3192]">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
