"use client";

import React, { useRef } from "react";
import { ThreeDCardDemo } from "../components/ThreeDCardDemo";
import FC from '../assets/FC.png';
import IDN from '../assets/idnHome.jpeg';
import Sum from '../assets/Sum.png';
import Chess from '../assets/C.jpeg';
import ProjectsLoader from "./ProjectsLoader";

const Projects = () => {
  // Example array of projects. You can expand this with real project data.
  const projects = [
    {
      title: "FC Gas",
      description: "Full-stack web application for FC Gas.",
      imageUrl:
        FC,
      link: "https://fcgas.site/",
    },
    {
      title: " idontknowwheretorent.biz",
      description: "A next-generation web app that delivers deep, data-driven insights about neighborhoods",
      imageUrl:
        IDN,
      link: "https://idontknowwheretorent.biz/",
    },
    {
      title: "Sumz",
      description: "An advanced system harnesses the power of artificial intelligence to efficiently distill lengthy articles into concise and coherent summaries",
      imageUrl:
        Sum,
      link: "https://preeminent-profiterole-dbdd80.netlify.app/",
    },
    {
      title: "Chess Game",
      description: "A chess game made with Java",
      imageUrl:
        Chess,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7292276963652624384/",
    },
    // Add more projects as needed
  ];

  // Create a ref for the scrollable container.
  const scrollContainerRef = useRef(null);

  // Scroll left by 300px.
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right by 300px.
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative container mx-auto px-1 py-0" id="projects">
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full"
      >
        &lt;
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {projects.map((project, index) => (
          <div key={index} className="flex-shrink-0 p-1">
            <ThreeDCardDemo
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          </div>
        ))}

        <div className="flex-shrink-0 p-1 mt-58 mr-10">
          <p className="text-3xl"> More projects coming soon...</p>
          <ProjectsLoader />
        </div>
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default Projects;
