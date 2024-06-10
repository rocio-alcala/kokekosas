"use client";

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CuidadosCard from "./CuidadosCard";

const kokedamaCuidados = [
  {
    title: "Riego",
    text: "El riego es esencial para mantener tus kokedamas saludables y vibrantes, sumerge la kokedama completamente en un recipiente con agua a temperatura ambiente. Deja que absorba agua durante 10-15 minutos, hasta que deje de burbujear. Luego, deja que escurra el exceso de agua antes de volver a colocarla en su lugar, la frecuencia dependera del tipo de planta, de la ubicacion de la misma y de la epoca del ano en la que nos encontremos. Intenta siempre mantener humeda la tierra de la kokedama.",
    imgPath: "/kokedama-riego-4.jpg",
  },
  {
    title: "Ubicacion",
    text: "Para que tus kokedamas prosperen, es importante proporcionarles el entorno adecuado, Coloca tus kokedamas en un lugar donde reciban luz indirecta brillante. Evita la luz solar directa, ya que puede secar el musgo y dañar las raíces de la planta, prefieren temperaturas entre 18°C y 25°C. Mantene tus plantas alejadas de corrientes de aire frío y fuentes de calor como radiadores.",
    imgPath: "/kokedama-home-5.jpg",
  },
  {
    title: "Mantenimiento",
    text: "El mantenimiento regular es clave para que tus kokedamas se mantengan en óptimas condiciones a lo largo del tiempo, Alimenta tus kokedamas con un fertilizante líquido diluido una vez al mes durante la temporada de crecimiento (primavera y verano). Evita el exceso de fertilizante, ya que puede quemar las raíces, Con el tiempo, el musgo exterior puede deteriorarse. Rocía el musgo con agua entre riegos para mantener la humedad, especialmente en climas secos o durante el invierno cuando la calefacción puede resecar el ambiente",
    imgPath: "/kokedama-care.jpg",
  },
];

export default function CuidadosSection() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  return (
    <div className="flex items-center justify-around py-20 font-manrope">
      {carouselIndex > 0 && (
        <a
          onClick={() => {
            if (carouselIndex > 0) setCarouselIndex(carouselIndex - 1);
          }}
          className="content-center self-stretch hover:cursor-pointer"
        >
          <IoIosArrowBack size={35} className="fill-[#FFF5D6]" />
        </a>
      )}
      <CuidadosCard {...kokedamaCuidados[carouselIndex]} />
      {carouselIndex < kokedamaCuidados.length - 1 && (
        <a
          onClick={() => {
            if (carouselIndex < kokedamaCuidados.length - 1)
              setCarouselIndex(carouselIndex + 1);
          }}
          className="content-center self-stretch hover:cursor-pointer"
        >
          <IoIosArrowForward size={35} className="fill-[#FFF5D6]" />
        </a>
      )}
    </div>
  );
}
