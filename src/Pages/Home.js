import React, { useEffect } from "react";
import Slider from "../Components/Slider";
import Banner from "../Components/Banner";
import AboutUs from "../Components/AboutUs";
import Courses from "../Components/Courses";
import Students from "../Components/Students";
import DataCounter from "../Components/DataCounter";
import GalleryHome from "../Components/GalleryHome";
//import VideoGallery from "../Components/VideoGallery";
import ExamHome from "../Components/ExamHome";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Slider />
      <Banner />
      <AboutUs />
      <ExamHome />
      <Courses />
      <Students />
      {/*<VideoGallery />*/}
      <DataCounter />
      <GalleryHome />
    </div>
  );
};

export default Home;
