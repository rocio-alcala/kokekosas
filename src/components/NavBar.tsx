"use client";

import { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
import { PiPottedPlantFill } from "react-icons/pi";
import { cn } from "@/helpers";

import NavBarToggle from "./NavBarToggle";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // check initial state of scroll to style NavBar
    if (window.scrollY > 50) setIsScroll(true);

    // define observer and define active section for style
    const sections = document.querySelectorAll("section");
    const sectionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entrie) => {
          if (entrie.isIntersecting) setActiveSection(entrie.target.id);
        });
      },
      { threshold: 0.3 },
    );
    sections.forEach((section) => sectionsObserver.observe(section));

    // event listener on scroll and set state to style navbar
    function handleScroll() {
      if (window.scrollY > 50) setIsScroll(true);
      else {
        setIsScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    // clean event listener and observer
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

      <nav className="fixed left-0 top-0 z-[1000] h-14 bg-transparent">
        {/* navbar-desktop */}
        <div className="fixed left-0 top-0 hidden w-full animate-fadeInTop justify-end bg-transparent  p-3 px-10 text-white opacity-0 md:flex md:opacity-100">
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
        </div>
        {/* navbar-mobile */}
        <div
          className={`fixed left-0 top-0 flex h-14 w-full animate-fadeInTop items-center justify-end bg-transparent pr-6 md:hidden`}
        >
          <NavBarToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <div
          className={cn(
            "fixed z-[-100] flex h-0 w-full flex-col overflow-hidden bg-black md:hidden",
            isMenuOpen && "h-svh",
          )}
        >
          <ul className="flex flex-col items-center justify-center gap-3 pr-6 pt-14">
            {NavBarItems.map((navBarItem) => (
              <NavBarItem
                key={navBarItem.name}
                onClick={() => {
                  scrollOnClick(navBarItem.name);
                  setIsMenuOpen(false);
                }}
                isActive={activeSection === navBarItem.name}
                isScroll={true}
              >
                {navBarItem.name.toUpperCase()}
              </NavBarItem>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
