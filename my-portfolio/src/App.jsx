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


function App() {
  return (
    <div className="App">
      <NavbarDemo />
      <Hero />
      <About />
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
      <SoftwareDevCycle />
      <p className='flex flex-col text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-400 font-medium items-center text-4xl mt-6'>Website Is Still Under Construction...</p>
      <div className='flex flex-col items-center justify-center mt-5 mb-10'>
        <Loader />
      </div>
      
    </div>
  );
}

export default App;

