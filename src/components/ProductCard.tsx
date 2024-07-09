import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  description: string;
  imgPath: string[];
  price?: number;
  available: boolean;
}

export default function ProductCard({ name, imgPath }: ProductCardProps) {
  const [currentImgPath, setCurrentImgPath] = useState(imgPath[0]);

  return (
    <div
      className="group relative m-5 aspect-[3/4.5] w-[28%] min-w-[350px]"
      onMouseEnter={() => setCurrentImgPath(imgPath[1])}
      onMouseLeave={() => setCurrentImgPath(imgPath[0])}
    >
      <Image
        className="h-full w-full object-cover transition-all duration-75"
        height={400}
        width={290}
        src={currentImgPath}
        key={currentImgPath}
        alt={name}
      />
      <div className="absolute bottom-0 left-0 flex max-h-0 w-full flex-col items-start overflow-hidden bg-slate-500 bg-opacity-80 text-[#FFF5D6] transition-all duration-700 group-hover:max-h-32">
        <div className="p-3 font-manrope text-xl font-medium">
          {name.toUpperCase()}
        </div>
        <Button className="mx-3 mb-3 w-fit p-2 text-slate-500 hover:bg-[#FFF5D6]">
          CONSULTAR
        </Button>
      </div>
    </div>
  );
}
