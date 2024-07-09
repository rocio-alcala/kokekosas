"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
};

const mockProducts = [
  {
    name: "Kokedama arbol de jade",
    description: "",
    available: false,
    imgPath: ["/jade-2.jpg", "/kokedama-jade.jpg"],
  },
  {
    name: "Kokedama singonio",
    description: "",
    available: false,
    imgPath: ["/singonio.jpg", "/singonio-2.jpg"],
  },
  {
    name: "Kokedama monstera",
    description: "",
    available: false,
    imgPath: ["/kokedama-monstera.jpg", "/monstera-2.jpg"],
  },
  {
    name: "Kokedama haworthia",
    description: "",
    available: false,
    imgPath: ["/haworthia.jpg", "/haworthia-2.jpg"],
  },
  {
    name: "Kokedama peperomia",
    description: "",
    available: false,
    imgPath: ["/peperomia.jpg", "/peperomia-2.jpg"],
  },
  {
    name: "Kokedama lazo de amor",
    description: "",
    available: false,
    imgPath: ["/lazo-de-amor.jpg", "/lazo-de-amor-2.jpg"],
  },

  {
    name: "Kokedama singonio rosado",
    description: "",
    available: false,
    imgPath: ["/singonio-rosa.jpg", "/singonio-rosa-2.jpg"],
  },
  {
    name: "Kokedama calathea",
    description: "",
    available: false,
    imgPath: ["/calathea.jpg", "/calathea-2.jpg"],
  },
  {
    name: "Kokedama rubra",
    description: "",
    available: false,
    imgPath: ["/rubra.jpg", "/rubra-2.jpg"],
  },
];

export default function ProductSection() {
  return (
    <Reveal className="mb-60 flex flex-col gap-5 p-5 text-center font-manrope text-2xl text-gray-900 sm:p-12 md:mb-44 md:p-20">
      <h2 className="my-4 font-vidaloka text-5xl font-bold tracking-wide text-black md:text-7xl">
        Algunos de nuestros productos...
      </h2>
      <p>
        Recuerda que nuestras kokedamas son hechas a mano y cada una es una{" "}
        <span className="font-bold">pieza unica</span>, por lo cual se realizan
        por encargo y es posible que tenga diferencias y variaciones de color,
        textura y medidas con relación a las fotos de la web.
      </p>
      <p>
        Si deseas un Kokedama de otro tipo, regalos personalizados, proyectos de
        paisajismo, souvenirs:{" "}
        <a
          href="https://wa.me/543518193522?text=Hola!%20quiero%20saber%20saber%20como%20encargar%20una%20kokedama%20"
          className="font-bold underline"
        >
          ponte en contacto.
        </a>
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center md:justify-around lg:p-10">
        {mockProducts.map((product) => (
          <ProductCard {...product} key={product.name} />
        ))}
      </div>
    </Reveal>
  );
}
