import { Suspense } from "react";
import Reveal from "./Reveal";
import ProductCardSkeleton from "./ProductsSkeleton";
import Products from "./Products";

export default async function ProductSection() {
  return (
    <Reveal className="mb-60 flex flex-col gap-5 p-5 text-center font-manrope text-2xl text-gray-900 sm:p-12 md:mb-44 md:p-20">
      <h2 className="my-4 font-vidaloka text-5xl font-bold tracking-wide text-black md:text-7xl">
        Algunos de nuestros productos...
      </h2>
      <p>
        Recuerda que nuestras kokedamas son hechas a mano y cada una es una{" "}
        <span className="font-bold">pieza unica</span>, por lo cual se realizan
        por encargo y es posible que tenga diferencias y variaciones de color,
        textura, medidas, con relación a las fotos de la web.{" "}
      </p>
      <span className="font-bold">
        La disponibilidad y precio de cada producto puede variar, es por eso que
        debera consultar el momento de realizar el encargo.
      </span>
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
      <Suspense fallback={<ProductCardSkeleton />}>
        <Products />
      </Suspense>
    </Reveal>
  );
}
