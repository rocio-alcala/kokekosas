"use client";

import { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
import { PiPottedPlantFill } from "react-icons/pi";
import { cn } from "@/helpers";

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
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const sectionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entrie) => {
          if (entrie.isIntersecting) setActiveSection(entrie.target.id);
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((section) => sectionsObserver.observe(section));
    function handleScroll() {
      if (window.scrollY > 50) setIsScroll(true);
      else {
        setIsScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionsObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* background on scroll div */}
      <div
        className={cn(
          `fixed left-0 top-[-100px] z-[1000] flex h-14 w-full justify-end bg-black p-5 text-white opacity-0 shadow-lg transition-all duration-700 ease-out`,
          isScroll && "top-0 opacity-100",
        )}
      ></div>
      {/* navbar-desktop */}
      <nav className="fixed left-0 top-0 z-[1000] flex h-14 w-full justify-end bg-transparent p-3 px-10 text-white">
        <ul className="flex gap-12">
          {NavBarItems.map((navBarItem) => (
            <NavBarItem
              key={navBarItem.name}
              onClick={() => scrollOnClick(navBarItem.name)}
              isActive={activeSection === navBarItem.name}
              isScroll={isScroll}
            >
              {navBarItem.name.toUpperCase()}
            </NavBarItem>
          ))}
        </ul>
      </nav>
    </>
  );
}
