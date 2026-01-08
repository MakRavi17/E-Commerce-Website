import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Privacy from "./Components/Privacy";
import Signup from "./Components/Signup";
// import Loginform from "./Components/Loginform";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/loginform" element={<Loginform />} /> */}
      </Routes>
    </>
  );
};

export default App;
