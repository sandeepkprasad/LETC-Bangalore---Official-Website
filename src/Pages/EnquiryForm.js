import React, { useContext, useRef, useState } from "react";
import letcContext from "../Context/letcContext";

export default function Modal() {
  const { showModal, setShowModal, addEnquiry, enquiry } =
    useContext(letcContext);
  const [enq, setEnq] = useState({ name: "", number: "", course: "" });
  const refSubmit = useRef(null);

  const handleChange = (e) => {
    setEnq({ ...enq, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEnquiry(enq.name, enq.number, enq.course);
    setEnq({ name: "", number: "", course: "" });
  };

  const submitButton = () => {
    refSubmit.current.click();
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[400px] my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-amber-400 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl text-slate-900 font-semibold">
                    Enquiry Form
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 tracking-widest"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={enq.name}
                        placeholder="Enter Name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                        minLength={3}
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="mobile"
                        className="block mb-2 text-sm font-medium text-gray-900 tracking-widest"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="number"
                        value={enq.number}
                        placeholder="Enter Mobile Number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                        minLength={10}
                        maxLength={15}
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="course"
                        className="form-label block mb-2 text-sm font-medium text-gray-900 tracking-widest"
                      >
                        Select Course
                      </label>
                      <select
                        className="form-select text-slate-700 py-2 px-3 rounded-lg bg-gray-50 border border-gray-300 text-sm block"
                        id="course"
                        name="course"
                        value={enq.course}
                        required
                        onChange={handleChange}
                      >
                        <option disabled value="">
                          Select Course
                        </option>
                        <option value="HIGH SCHOOL LEVEL COURSE">
                          HIGH SCHOOL LEVEL COURSE
                        </option>
                        <option value="ENGINEERING PREPARATION">
                          ENGINEERING PREPARATION
                        </option>
                        <option value="MEDICAL PREPARATION">
                          MEDICAL PREPARATION
                        </option>
                        <option value="COMMERCE">COMMERCE</option>
                      </select>
                    </div>
                    <button type="submit" className="hidden" ref={refSubmit}>
                      Submit Button
                    </button>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#2E3192] text-white active:bg-red-600 font-base uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={submitButton}
                  >
                    Send Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
