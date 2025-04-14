import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { NavbarDemo } from "./components/NavbarDemo";
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision';
import { BentoGrid } from './components/ui/bento-grid';
import  SoftwareDevCycle  from './components/SoftwareDevCycle';
import Loader from './components/Loader';
import {BackgroundLinesDemo} from './components/BackgroundLinesDemo';
import { BackgroundLines } from './components/ui/background-lines';
import { ThreeDMarqueeDemo } from './components/ThreeDMarqueeDemo';
import ResumeSection from './components/ResumeSection';


function App() {
  return (
    <div className="App">
      <NavbarDemo />

      <Hero id='home'/>

      <About />
      <ResumeSection /> {/* Resume Section */}
      <BackgroundBeamsWithCollision>
        <div className="text-center z-10 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            My project workflow
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-medium">
            From ideation to deployment, here's how I bring ideas to life.
          </p>
        </div>
      </BackgroundBeamsWithCollision> 
      <SoftwareDevCycle id='sdlc'/> {/* Software Development Cycle */}

      <ThreeDMarqueeDemo /> {/* Project Preview with sliding pictures */}
      <Projects /> {/* Projects */}

      <div className='flex flex-col items-center justify-center mt-5  bg-gray-50 ' id='contact'>
        <p className='mt-7 max-w-xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-medium text-2xl'>Get In Touch</p>
        <p className='text-2xl md:text-5xl font-bold text-gray-800 dark:text-white mt-1'>Contact Me</p>
        <Contact id='contact'/> {/* Contact */}
        <p className='mb-3 pb-3 pt-2 mt-2 text-gray-500'>Copyright @ 2025 Kim Magidhi</p>
      </div>
      
    </div>
  );
}

export default App;

