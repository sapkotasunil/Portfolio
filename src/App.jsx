import React from "react";
import Header from "./Componenets/Header";
import Footer from "./Componenets/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/ProjectSection";
import { ScrollText } from "./Componenets/ScrollText";
import SkillsData from "./Componenets/SkillsData";
import ProjectSection from "./Pages/ProjectSection";

const App = () => {
  return (
    <BrowserRouter>
      <div className="px-1 lg:px-24">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<ProjectSection />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
