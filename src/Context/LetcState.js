import { useState } from "react";
import letcContext from "./letcContext";

const LetcState = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [notify, setNotify] = useState([]);
  const [enquiry, setEnquiry] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [banner, setBanner] = useState([]);
  const [exam, setExam] = useState([]);

  const getNotification = async () => {
    let url = "https://letc-backend.onrender.com/notification/getnotification";

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();
    setNotify(json);
  };

  const addEnquiry = async (name, number, course) => {
    let url = "https://letc-backend.onrender.com/enquiry/addenquiry";

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        number,
        course,
      }),
    });

    const json = await response.json();
    setEnquiry(enquiry.concat(json));
  };

  const getGallery = async () => {
    let url = "https://letc-backend.onrender.com/gallery/getgallery";

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();
    setGallery(json);
  };

  const getBanner = async () => {
    let url = "https://letc-backend.onrender.com/banner/getbanner";

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();
    setBanner(json);
  };

  const getExams = async () => {
    let url = "https://letc-backend.onrender.com/exams/allexams";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setExam(json);
  };
  return (
    <letcContext.Provider
      value={{
        showModal,
        setShowModal,
        getNotification,
        notify,
        addEnquiry,
        enquiry,
        getGallery,
        gallery,
        getBanner,
        banner,
        getExams,
        exam,
      }}
    >
      {props.children}
    </letcContext.Provider>
  );
};

export default LetcState;
