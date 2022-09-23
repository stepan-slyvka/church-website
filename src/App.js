import React, { Fragment } from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
