import React from "react";
import { motion } from "framer-motion";
import resumeIamge from '../assets/resumeImage.png';
import resume from '../assets/Kim_Resume.pdf';
import DownloadButton from "./DownloadButton";

const ResumeSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4" id='resume'>
        {/* Heading */}
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj text-center mb-2">
          My Resume
        </h2>

        {/* Resume Card */}
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          {/* Resume Preview Image (Clickable) */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative"
          >
            <img
              src={resumeIamge}
              alt="Resume Preview"
              className="w-full h-auto"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-60 transition-opacity duration-300">
              <span className="text-white text-lg">
                Click to view full resume
              </span>
            </div>
          </a>

          {/* Download Button */}
          <div className="p-4 flex justify-center">
            <a
              href={resume}
              download
              className="rounded"
            >
              <DownloadButton />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;