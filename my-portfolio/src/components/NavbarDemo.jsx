import React, { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Home from "../assets/home.png";

export function NavbarDemo() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative w-full flex items-center justify-center">
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
        <Menu setActive={setActive}>
          {/* Home */}
          <MenuItem setActive={setActive} active={active} item="Home 🏠">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#home">Home 👋🏽</HoveredLink>
            </div>
          </MenuItem>
          {/* About */}
          <MenuItem setActive={setActive} active={active} item="About 🧑🏾‍💻">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#about">About Me</HoveredLink>
            </div>
          </MenuItem>
          {/* Projects */}
          <MenuItem setActive={setActive} active={active} item="Projects 🛹">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#projects">My Projects</HoveredLink>
            </div>
          </MenuItem>
          {/* Contact */}
          <MenuItem setActive={setActive} active={active} item="Contact 📱">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#contact">Contact</HoveredLink>
              <HoveredLink href="/resume.pdf">Resume</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

