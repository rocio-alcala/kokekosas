export interface Product {
  name: string;
  description: string;
  imgPath: string[];
  price?: number;
  id: number;
  tag: Tag;
}
export type Tag = "por encargo" | "disponible" | "no disponible";

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
    tag: "no disponible",
    imgPath: ["/lazo-de-amor.jpg", "/lazo-de-amor-2.jpg"],
  },

  {
    name: "Kokedama singonio rosado",
    id: 7,
    description: "",
    tag: "no disponible",
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

export default function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 2000);
  });
}
