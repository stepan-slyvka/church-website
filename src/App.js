import React, { Fragment, useState, useEffect } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import classes from "./App.module.css";

import { HiArrowUp } from "react-icons/hi";

import { Link } from "react-scroll";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      {showTopBtn && (
        <Link to="navbar" smooth={true} duration={500}>
          <div className={classes.arrowUp}>
            <HiArrowUp />
          </div>
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
