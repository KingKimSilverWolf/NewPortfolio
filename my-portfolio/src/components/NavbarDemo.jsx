import React, { useState, useEffect, useRef } from "react";
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import comp from '../assets/code.png';
import home from '../assets/house.png';
import resume from '../assets/resume.png';
import projects from '../assets/projects.png';
import contact from '../assets/contact.png';
import sdlc from '../assets/sdlc.png';

export function NavbarDemo() {
  const [active, setActive] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center">
      <div
        className={cn(
          "fixed top-0 inset-x-0 max-w-2xl mx-auto z-50 transition-transform duration-300",
          !showNavbar ? "-translate-y-full" : "translate-y-5"
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home 🏠">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#home">
                Home
                <img 
                  src={home}
                  alt="Tech Stack"
                  className="inline-block w-4 h-4 ml-1 animate-bounce"
                /> 
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="About 🧑🏾‍💻">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#about">
                Tech Stack 
                <img 
                  src={comp}
                  alt="Tech Stack"
                  className="inline-block w-4 h-4 ml-1 animate-bounce"
                />
                </HoveredLink>
              <HoveredLink href='#resume'>
                Resume
                <img 
                  src={resume}
                  alt="Tech Stack"
                  className="inline-block w-4 h-4 ml-1 animate-bounce"
                />
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Projects 🛹">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#sdlc">
                Project Development
                <img 
                  src={sdlc}
                  alt="Tech Stack"
                  className="inline-block w-4 h-4 ml-1 animate-bounce"
                />
              </HoveredLink>
              <HoveredLink href="#projects">
                Projects
                <img 
                  src={projects}
                  alt="Tech Stack"
                  className="inline-block w-4 h-4 ml-1 animate-bounce"
                />
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact 📱">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#contact">
                Contact
                <img 
                  src={contact}
                  alt="Tech Stack"
                  className="inline-block w-4 h-4 ml-1 animate-bounce"
                />
              </HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}