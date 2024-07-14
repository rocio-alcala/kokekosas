"use client";

import { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
import { PiPottedPlantFill } from "react-icons/pi";
import { cn } from "@/helpers";
import { IoMdClose, IoMdMenu } from "react-icons/io";

import NavBarToggle from "./NavBarToggle";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import CartSummary from "./CartSummary";
import { useCartContext } from "./CartContextProvider";

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
  const { cart } = useCartContext();
  const [isCartOpen, setIsCartOpen] = useState(false);
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

      <nav className="fixed left-0 top-0 z-[1000] flex h-14 w-full animate-fadeInTop items-center justify-between bg-transparent px-4 md:justify-end">
        {/* navbar-desktop */}
        <ul className="hidden w-full items-center justify-end gap-12 bg-transparent p-3 px-10 text-white opacity-0 md:flex md:opacity-100">
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
        {/* navbar-toggle */}
        <div
          className={`flex h-14 w-fit items-center bg-transparent pr-6 md:hidden`}
        >
          <NavBarToggle
            isOpen={isMenuOpen}
            onClickClose={() => setIsMenuOpen(false)}
            onClickOpen={() => setIsMenuOpen(true)}
            CloseIcon={IoMdClose}
            OpenIcon={IoMdMenu}
            iconSize={25}
            iconClassName="fill-[#FFF5D6]"
          />
        </div>
        {/* navbar icon carrito */}
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        {/* navbar-mobile */}
      </nav>
      <div
        className={cn(
          "fixed left-0 top-0 z-[100] flex h-0 w-full flex-col overflow-hidden bg-black md:hidden",
          isMenuOpen && "h-svh",
        )}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-3 px-6 py-14">
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
      {/* carrito */}
      <div
        className={cn(
          "fixed right-0 top-0 z-[1100] flex h-svh max-w-0 flex-col items-center overflow-hidden whitespace-nowrap bg-black font-manrope text-lg text-[#FFF5D6]",
          isCartOpen && "max-w-[700px]",
        )}
      >
        <IoMdClose
          className="mr-4 h-14 cursor-pointer place-self-end fill-[#FFF5D6]"
          size={35}
          onClick={() => setIsCartOpen(false)}
        />
        <h2 className="mb-6 text-xl font-bold ">Tu carrito</h2>
        {cart.length === 0 ? (
          <p className="h-20 whitespace-normal p-6 text-center">
            Todavia no agregaste nada a tu carrito
          </p>
        ) : (
          <CartSummary />
        )}
      </div>
    </>
  );
}
