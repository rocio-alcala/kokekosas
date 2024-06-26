"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const mockProducts = [
  {
    name: "Kokedama arbol de jade",
    description: "",
    available: false,
    imgPath: "/kokedama-jade.jpg",
  },
  {
    name: "Kokedama monstera",
    description: "",
    available: false,
    imgPath: "/kokedama-monstera.jpg",
  },
  {
    name: "Kokedama haworthia",
    description: "",
    available: false,
    imgPath: "/kokedama-haworthia.jpg",
  },
  {
    name: "Kokedama hawortia",
    description: "",
    available: false,
    imgPath: "/kokedama-haworthia.jpg",
  },
];
export default function ProductSection() {
  const [selectedProductIndex, setSelectedProductIndex] = useState(1);

  return (
    <Reveal className="flex flex-col gap-5 p-5 text-center font-manrope text-2xl text-gray-900 sm:p-12 md:p-20 ">
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
      <div className="flex items-center justify-between p-20">
        <MdOutlineArrowBackIos
          size={30}
          onClick={() => setSelectedProductIndex(selectedProductIndex - 1)}
        />
        <div className="flex items-center justify-around">
          <ProductCard
            {...mockProducts[selectedProductIndex - 1]}
            key={mockProducts[selectedProductIndex - 1].name}
          />
          <ProductCard
            {...mockProducts[selectedProductIndex]}
            key={mockProducts[selectedProductIndex].name}
          />
          <ProductCard
            {...mockProducts[selectedProductIndex + 1]}
            key={mockProducts[selectedProductIndex + 1].name}
          />
        </div>
        <MdOutlineArrowForwardIos
          size={30}
          onClick={() => setSelectedProductIndex(selectedProductIndex + 1)}
        />
      </div>
    </Reveal>
  );
}
