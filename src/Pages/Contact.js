import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto py-14 mt-20 md:mt-0">
      <div className="contact mb-16">
        <h3 className="font-bold text-slate-700 text-2xl mb-10 ml-5 md:ml-0 tracking-wider">
          Contact Us
        </h3>
        <div className="map w-full flex justify-center mb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62177.91231202048!2d77.545953!3d13.091611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae239fca36d85f%3A0x2491e7d8df223852!2sRCS%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1692638106044!5m2!1sen!2sin"
            width="1000"
            height="200"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl w-fit md:w-full"
          ></iframe>
        </div>
        <div className="w-full md:flex justify-center md:space-x-10">
          <div className="vision md:w-1/2 text-center mb-10 md:mb-0 bg-blue-100 rounded-lg py-5">
            <h4 className="font-bold text-2xl text-[#2E3192] mb-5">
              OUR CONTACTS
            </h4>
            <div className="mobile mb-5">
              <p className="font-bold mb-2">Mobile :</p>
              <p className="mb-2 font-medium tracking-wide text-slate-600">
                +91 80234 53597, +91 93420 33334
              </p>
              <p className="font-medium tracking-wide text-slate-600">
                +91 95909 13334, +91 93425 80693
              </p>
            </div>
            <div className="email">
              <p className="font-bold mb-2">Email :</p>
              <p className="mb-2 font-medium tracking-wide text-slate-600">
                contact@letceducation.com
              </p>
            </div>
          </div>
          <div className="vision md:w-1/2 text-center bg-blue-100 rounded-lg py-5">
            <h4 className="font-bold text-2xl text-[#2E3192] mb-3">
              OUR ADDRESS
            </h4>
            <div className="address">
              <p className="font-bold mb-2">Corporate Office :</p>
              <p className="mb-2 font-medium tracking-wide text-slate-600">
                #6, Kalathur Building, Gangamma Circle, Jalahalli, Bangalore -
                560013
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
