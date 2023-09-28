import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto py-14 mt-20 md:mt-0">
      <div className="contact mb-16">
        <h3 className="font-bold text-slate-700 text-3xl mb-10 ml-5 md:ml-0 tracking-wider">
          Contact Us
        </h3>
        <div className="w-full md:flex justify-center md:space-x-10 mb-16">
          <div className="md:w-1/2 text-center mb-10 md:mb-0 bg-blue-100 rounded-lg py-5">
            <h4 className="font-bold text-3xl text-[#2E3192] mb-5">
              OUR CONTACTS
            </h4>
            <div className="mobile mb-5 space-y-5">
              <p className="font-bold text-lg mb-5">Corporate Office :</p>
              <p className="font-medium text-2xl tracking-wide text-slate-600">
                <Link to="tel:8023453597">+91 80234 53597</Link>
              </p>
              <p className="font-medium text-2xl tracking-wide text-slate-600">
                <Link to="tel:9342033334">+91 93420 33334</Link>
              </p>
              <p className="font-medium text-2xl tracking-wide text-slate-600">
                <Link to="tel:9342580693">+91 93425 80693</Link>
              </p>
              <p className="font-medium text-2xl tracking-wide text-slate-600">
                <Link to="tel:9590913334">+91 95909 13334</Link>
              </p>
            </div>
            <div className="mobile mb-5 space-y-5">
              <p className="font-bold text-lg mb-5">Branch Office :</p>
              <p className="font-medium text-2xl tracking-wide text-slate-600">
                <Link to="tel:8123476244">+91 81234 76244</Link>
              </p>
              <p className="font-medium text-2xl tracking-wide text-slate-600">
                <Link to="tel:9590913334">+91 95909 13334</Link>
              </p>
              <p className="font-medium text-2xl tracking-wide text-slate-600">
                <Link to="tel:9353033334">+91 93530 33334</Link>
              </p>
            </div>
            <div className="email">
              <p className="font-bold text-lg mb-5">Email :</p>
              <p className="mb-2 font-medium text-2xl tracking-wide text-slate-600">
                <Link to="mailto:contact@letceducation.in">
                  contact@letceducation.in
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 text-center bg-blue-100 rounded-lg p-5 space-y-10">
            <h4 className="font-bold text-3xl text-[#2E3192]">OUR ADDRESS</h4>
            <div>
              <div className="address mb-10">
                <p className="font-bold text-lg mb-2">Corporate Office :</p>
                <p className="mb-2 font-medium text-xl tracking-wide text-slate-600">
                  #6, Kalathur Building, Gangamma Circle, Jalahalli, Bangaluru -
                  560013
                </p>
              </div>
              <div className="w-full flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31093.363911492404!2d77.547084!3d13.056634000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae22b3163351bb%3A0xef143d060f5ecf06!2sL.E.T.C!5e0!3m2!1sen!2sus!4v1695879779163!5m2!1sen!2sus"
                  width="1000"
                  height="200"
                  title="contact"
                  style={{ border: "0px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl w-fit md:w-full"
                ></iframe>
              </div>
            </div>
            <div>
              <div className="address mb-10">
                <p className="font-bold text-lg mb-2">Branch Office :</p>
                <p className="mb-2 font-medium text-xl tracking-wide text-slate-600">
                  Dwarka Nagar, Bengaluru - 560063
                </p>
              </div>
              <div className="w-full flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15542.562568018042!2d77.617624!3d13.121937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19198c64d229%3A0x3d3d4a920909962d!2sL.E.T.C(Luminous%20Educational%20Training%20Centre)!5e0!3m2!1sen!2sus!4v1695880875119!5m2!1sen!2sus"
                  width="1000"
                  height="200"
                  title="contact"
                  style={{ border: "0px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl w-fit md:w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
