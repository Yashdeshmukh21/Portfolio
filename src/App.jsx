import { useState } from "react";
import "./App.scss";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Containers/Home/Index.jsx";
import About from "./Containers/About/Index.jsx";
import Resume from "./Containers/Resume/Index.jsx";
import Skills from "./Containers/Skills/Index.jsx";
import Portfolio from "./Containers/Portfolio/Index.jsx";
import Contact from "./Containers/Contact/Index.jsx";
import Navbar from "./Component/Navbar/Index.jsx";
import Footer from "./Component/Footer/Index.jsx";
import particles from "./utils/particles"; // Ensure this path is correct

function App() {
  const location = useLocation();

  const handleInit = async (main) => {
    await loadFull(main);
  };

  // Render Particles only on the home page
  const renderParticlesJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* Particles Background */}
      {renderParticlesJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* Navbar */}
      <Navbar />

      {/* Main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;