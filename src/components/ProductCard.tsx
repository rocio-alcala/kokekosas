import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  description: string;
  imgPath: string;
  price?: number;
  available: boolean;
}

export default function ProductCard({
  name,
  description,
  imgPath,
  available,
  price,
}: ProductCardProps) {
  return (
    <div className="flex flex-col items-center font-manrope text-2xl text-gray-900">
      <Image alt={name} src={imgPath} width={200} height={350} />
      <h2 className="font-bold">{name.toUpperCase()}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
