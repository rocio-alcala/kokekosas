"use client";

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/helpers";
import { IoAddCircle } from "react-icons/io5";
import { useCartContext } from "./CartContextProvider";
import { Product } from "@/services/getProducts";

export default function ProductCard({ name, imgPath, tag, id }: Product) {
  const [currentImgPath, setCurrentImgPath] = useState(imgPath[0]);
  const whatsAppMessage = `Hola quiero consultar para encargarte una ${name}`
    .split(" ")
    .join("%20");

  const { addProduct } = useCartContext();

  return (
    <div
      className="group relative m-5 aspect-[3/4.5] w-[28%] min-w-[350px]"
      onMouseEnter={() => setCurrentImgPath(imgPath[1])}
      onMouseLeave={() => setCurrentImgPath(imgPath[0])}
    >
      <span className="absolute right-2 top-2 bg-slate-500 p-1.5 text-xs tracking-widest text-[#FFF5D6]">
        {tag.toUpperCase()}
      </span>
      <Image
        className="h-full w-full object-cover transition-all duration-75"
        height={400}
        width={290}
        src={currentImgPath}
        alt={name}
      />
      <div className="absolute bottom-0 left-0 flex max-h-0  w-full flex-col items-start overflow-hidden bg-slate-500 bg-opacity-80 text-[#FFF5D6] transition-all duration-700 group-hover:max-h-32">
        <div className="p-3 pb-0 font-manrope text-xl font-medium tracking-widest">
          {name.toUpperCase()}
        </div>
        <div className="flex items-center justify-center gap-3 p-3 pt-1">
          <Link href={`https://wa.me/543518193522?text=${whatsAppMessage}`}>
            <Button className="h-fit w-fit cursor-pointer rounded-3xl bg-transparent p-1.5 text-[#FFF5D6] hover:scale-110 hover:bg-[#FFF5D6] hover:text-gray-700">
              CONSULTAR
            </Button>
          </Link>
          <IoAddCircle
            size={36}
            className={cn(
              "cursor-pointer fill-[#FFF5D6] hover:scale-110",
              tag !== "disponible" &&
                "cursor-not-allowed fill-gray-400 hover:scale-100",
            )}
            onClick={() => addProduct(id, name)}
          />
        </div>
      </div>
    </div>
  );
}
