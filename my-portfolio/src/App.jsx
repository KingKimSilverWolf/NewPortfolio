import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { NavbarDemo } from "./components/NavbarDemo";

function App() {
  return (
    <div className="App">
      <NavbarDemo />
      <Hero />
      <About />
    </div>
  );
}

export default App;

