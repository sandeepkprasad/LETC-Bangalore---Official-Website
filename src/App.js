import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LetcState from "./Context/LetcState";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import NavTop from "./Components/NavTop";
import NavLogo from "./Components/NavLogo";
import Footer from "./Components/Footer";
import TopButton from "./Components/TopButton";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import EnquiryForm from "./Pages/EnquiryForm";
import Courses from "./Pages/Courses";
import Result from "./Pages/Result";
import Exam from "./Pages/Exam";
import MobileNav from "./Components/MobileNav";
import Course1 from "./Pages/Course1";
import Course2 from "./Pages/Course2";
import Course3 from "./Pages/Course3";
import Course4 from "./Pages/Course4";

const App = () => {
  return (
    <LetcState>
      <Router>
        <NavTop />
        <NavLogo />
        <Navbar />
        <MobileNav />
        <EnquiryForm />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/results" element={<Result />} />
          <Route exact path="/exam" element={<Exam />} />
          <Route exact path="/enquiry" element={<EnquiryForm />} />
          <Route exact path="/courses/course-1" element={<Course1 />} />
          <Route exact path="/courses/course-2" element={<Course2 />} />
          <Route exact path="/courses/course-3" element={<Course3 />} />
          <Route exact path="/courses/course-4" element={<Course4 />} />
        </Routes>
        <Footer />
        <TopButton />
      </Router>
    </LetcState>
  );
};

export default App;
