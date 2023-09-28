import React, { useContext } from "react";
import logo from "../Assests/logo.jpg";
import { Link } from "react-router-dom";
import letcContext from "../Context/letcContext";

const NavLogo = () => {
  const { setShowModal } = useContext(letcContext);
  return (
    <div className="bg-white pt-3 pb-1 hidden md:block">
      <div className="container mx-auto flex justify-between space-x-10 items-center">
        <div className="logo flex items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-10 mr-10" />
          </Link>
          <h3 className="text-3xl text-[#2E3192]/90 font-bold tracking-wider w3-container w3-center w3-animate-left">
            L.E.T.C Pvt. Ltd.
          </h3>
        </div>
        <div className="enquiry-btn">
          <button
            className="text-white bg-red-600 hover:bg-black duration-300 px-6 py-3 rounded-lg tracking-wider shadow-lg animate-bounce"
            onClick={() => setShowModal(true)}
          >
            Enquiry Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavLogo;
