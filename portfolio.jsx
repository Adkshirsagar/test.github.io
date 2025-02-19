import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import "./styles.css";

function Home() {
  return (
    <div className="container mx-auto p-6 text-center bg-beige min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800">Tamanna Bansal</h1>
      <p className="text-lg mt-2 text-gray-700">Artificial Intelligence & Data Science Enthusiast</p>
      <h2 className="text-2xl font-semibold mt-6 text-gray-800">Education</h2>
      <p className="text-gray-600">MIT World Peace University - [Your Degree]</p>
      <p className="text-gray-600">Class 12th - [Your School]</p>
      <h2 className="text-2xl font-semibold mt-6 text-gray-800">Internship</h2>
      <p className="text-gray-600">[Internship Details]</p>
    </div>
  );
}

function Resume() {
  return (
    <div className="container mx-auto p-6 text-center bg-beige min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800">My Resume</h2>
      <button className="bg-gray-700 text-white px-4 py-2 mt-4 rounded flex items-center mx-auto hover:bg-gray-900">
        <FaDownload className="mr-2" /> Download Resume
      </button>
    </div>
  );
}

function Projects() {
  return (
    <div className="container mx-auto p-6 bg-beige min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
      <ul className="mt-4">
        <li className="text-gray-700 hover:underline"><Link to="/project1">Project 1</Link></li>
        <li className="text-gray-700 hover:underline"><Link to="/project2">Project 2</Link></li>
        <li className="text-gray-700 hover:underline"><Link to="/project3">Project 3</Link></li>
      </ul>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="container mx-auto p-6 text-center bg-beige min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
      <img src="/your-image.jpg" alt="Tamanna Bansal" className="w-40 h-40 mx-auto rounded-full mt-4 border-4 border-gray-700" />
      <p className="mt-4 text-gray-700">[Your thoughts and journey in AI & Data Science]</p>
    </div>
  );
}

export default function Portfolio() {
  return (
    <Router>
      <nav className="bg-gray-900 text-white p-4 flex justify-between shadow-lg fixed w-full top-0 z-50">
        <div>
          <Link to="/" className="mr-4 hover:text-gray-400">Home</Link>
          <Link to="/resume" className="mr-4 hover:text-gray-400">Resume</Link>
          <Link to="/projects" className="mr-4 hover:text-gray-400">Projects</Link>
          <Link to="/about" className="mr-4 hover:text-gray-400">About Me</Link>
        </div>
      </nav>
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}
