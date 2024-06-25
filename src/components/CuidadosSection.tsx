"use client";

import React, { useState } from "react";
import CuidadosCard from "./CuidadosCard";
import { cn } from "@/helpers";
import Reveal from "./Reveal";

const kokedamaCuidados = [
  {
    title: "Riego",
    texts: [
      "El riego es esencial para mantener tus kokedamas saludables y vibrantes.",
      "Para regarlas, sumerge la kokedama completamente en un recipiente con agua a temperatura ambiente. Deja que absorba agua durante 10-15 minutos, hasta que deje de burbujear. Luego, deja que escurra el exceso de agua antes de volver a colocarla en su lugar.",
      "La frecuencia dependerá del tipo de planta, de la ubicación de la misma y de la época del año en la que nos encontremos. Intenta siempre mantener la bola de tierra húmeda.",
    ],
    imgPath: "/kokedama-riego-4.jpg",
  },
  {
    title: "Ubicacion",
    texts: [
      "Para que tus kokedamas prosperen, es importante proporcionarles el entorno adecuado.",
      "Coloca tus kokedamas en un lugar donde reciban luz indirecta brillante. Evita la luz solar directa, ya que puede secar el musgo y dañar las raíces de la planta. Preferentemente, la temperatura debería mantenerse entre 18°C y 25°C.",
      "Tip: Mantenlas alejadas de corrientes de aire frío y fuentes de calor como radiadores.",
    ],
    imgPath: "/kokedama-home-5.jpg",
  },
  {
    title: "Mantenimiento",
    texts: [
      "El mantenimiento regular es clave para que tus kokedamas se mantengan en óptimas condiciones a lo largo del tiempo.",
      "Alimenta tus kokedamas con un fertilizante líquido diluido una vez al mes durante la temporada de crecimiento (primavera y verano). Evita el exceso de fertilizante, ya que puede quemar las raíces.",
      "Con el tiempo, el musgo exterior puede deteriorarse. Rocía el musgo con agua entre riegos para mantener la humedad, especialmente en climas secos o durante el invierno cuando la calefacción puede resecar el ambiente.",
    ],
    imgPath: "/kokedama-care.jpg",
  },
];

export default function CuidadosSection() {
  const [activeSection, setActiveSection] = useState("");
  return (
    <>
      <Reveal>
        <h2 className="my-12 p-5 text-center font-vidaloka text-5xl font-bold tracking-wide text-[#FFF5D6] transition-all duration-500 md:m-16 md:text-7xl">
          Descubri como cuidar tu kokedama
        </h2>
      </Reveal>
      <div
        className={cn(
          "flex h-full flex-col items-center justify-center gap-5 font-manrope transition-all duration-500 md:py-16",
        )}
      >
        {kokedamaCuidados.map((cuidado) => (
          <CuidadosCard
            key={cuidado.title}
            {...cuidado}
            isActive={activeSection === cuidado.title}
            onClick={() => setActiveSection(cuidado.title)}
          />
        ))}
      </div>
    </>
  );
}
