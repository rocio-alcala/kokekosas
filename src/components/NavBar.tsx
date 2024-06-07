"use client";

import { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
import { PiPottedPlantFill } from "react-icons/pi";

const NavBarItems = [
  { name: "kokedama", icon: PiPottedPlantFill },
  { name: "cuidados", icon: PiPottedPlantFill },
  { name: "productos", icon: PiPottedPlantFill },
  { name: "contacto", icon: PiPottedPlantFill },
];

export default function NavBar() {
  function scrollOnClick(id: string) {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  }

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const sectionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entrie) => {
          if (entrie.isIntersecting) setActiveSection(entrie.target.id);
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => sectionsObserver.observe(section));
  }, []);

  return (
    <nav className="animateOnScroll fixed left-0 top-0 z-50 flex w-full animate-blur justify-end bg-transparent p-5 text-white">
      <ul className="flex gap-12">
        {NavBarItems.map((navBarItem) => (
          <NavBarItem
            key={navBarItem.name}
            onClick={() => scrollOnClick(navBarItem.name)}
            active={activeSection === navBarItem.name}
          >
            {navBarItem.name.toUpperCase()}
          </NavBarItem>
        ))}
      </ul>
    </nav>
  );
}
