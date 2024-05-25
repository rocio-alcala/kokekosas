"use client";

import { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
import { PiPottedPlantFill } from "react-icons/pi";

export default function NavBar() {
  function scrollOnClick(id: string) {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  }

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    console.log(sections);
    const sectionsObserver = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entrie) => {
          if (entrie.isIntersecting) setActiveSection(entrie.target.id);
        });
      },
      { threshold: 0.8 },
    );

    sections.forEach((section) => sectionsObserver.observe(section));
  }, []);

  return (
    <nav className="fixed left-0 top-0 flex w-full justify-end bg-transparent p-5 text-white">
      <ul className="flex gap-3">
        <NavBarItem
          onClick={() => scrollOnClick("kokedama")}
          Icon={PiPottedPlantFill}
          active={activeSection === "kokedama"}
        >
          KOKEDAMA
        </NavBarItem>
        <NavBarItem
          onClick={() => scrollOnClick("cuidados")}
          Icon={PiPottedPlantFill}
          active={activeSection === "cuidados"}
        >
          CUIDADOS
        </NavBarItem>
        <NavBarItem
          onClick={() => scrollOnClick("productos")}
          Icon={PiPottedPlantFill}
          active={activeSection === "productos"}
        >
          PRODUCTOS
        </NavBarItem>
        <NavBarItem
          onClick={() => scrollOnClick("contacto")}
          Icon={PiPottedPlantFill}
          active={activeSection === "contacto"}
        >
          CONTACTO
        </NavBarItem>
      </ul>
    </nav>
  );
}
