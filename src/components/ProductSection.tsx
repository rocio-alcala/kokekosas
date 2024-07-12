import ProductCard, { Tag } from "./ProductCard";
import Reveal from "./Reveal";

export interface Product {
  name: string;
  description: string;
  id: number;
  tag: Tag;
  imgPath: string[];
}

const mockProducts: Product[] = [
  {
    name: "Kokedama arbol de jade",
    id: 1,
    description: "",
    tag: "por encargo",
    imgPath: ["/jade-2.jpg", "/kokedama-jade.jpg"],
  },
  {
    name: "Kokedama singonio",
    id: 2,
    description: "",
    tag: "no disponible",
    imgPath: ["/singonio.jpg", "/singonio-2.jpg"],
  },
  {
    name: "Kokedama monstera",
    id: 3,
    description: "",
    tag: "por encargo",
    imgPath: ["/kokedama-monstera.jpg", "/monstera-2.jpg"],
  },
  {
    name: "Kokedama haworthia",
    id: 4,
    description: "",
    tag: "disponible",
    imgPath: ["/haworthia-2.jpg", "/kokedama-haworthia.jpg"],
  },
  {
    name: "Kokedama peperomia",
    id: 5,
    description: "",
    tag: "por encargo",
    imgPath: ["/peperomia.jpg", "/peperomia-2.jpg"],
  },
  {
    name: "Kokedama lazo de amor",
    id: 6,
    description: "",
    tag: "por encargo",
    imgPath: ["/lazo-de-amor.jpg", "/lazo-de-amor-2.jpg"],
  },

  {
    name: "Kokedama singonio rosado",
    id: 7,
    description: "",
    tag: "por encargo",
    imgPath: ["/singonio-rosa.jpg", "/singonio-rosa-2.jpg"],
  },
  {
    name: "Kokedama calathea",
    id: 8,
    description: "",
    tag: "no disponible",
    imgPath: ["/calathea.jpg", "/calathea-2.jpg"],
  },
  {
    name: "Kokedama rubra",
    id: 9,
    description: "",
    tag: "por encargo",
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
      <div className="mt-10 flex flex-wrap items-center justify-center md:justify-around lg:p-10">
        {mockProducts.map((product) => (
          <ProductCard {...product} key={product.name} />
        ))}
      </div>
    </Reveal>
  );
}
