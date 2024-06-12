import Image from "next/image";
import React from "react";
import { cn } from "@/helpers";

interface CuidadosCardProps {
  title: string;
  text: string;
  imgPath: string;
  isActive?: boolean;
  onClick: () => void;
}

export default function CuidadosCard({
  title,
  text,
  imgPath,
  isActive,
  onClick,
}: CuidadosCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group h-fit w-[95%] rounded-3xl bg-[#FFF5D6] p-7 text-2xl text-black shadow-xl  hover:cursor-pointer md:w-[85%]",
      )}
    >
      <h3 className="text-center font-vidaloka text-2xl font-bold tracking-widest md:text-4xl">
        {title.toUpperCase()}
      </h3>
      <div
        className={cn(
          "grid grid-rows-[0fr] transition-all duration-1000",
          isActive && "grid-rows-[1fr]",
        )}
      >
        <div className=" flex flex-col items-center gap-5 overflow-hidden lg:flex-row">
          <p className="my-6 text-justify font-manrope text-xl text-gray-900 md:text-2xl">
            {text}
          </p>
          <Image
            src={imgPath}
            alt={`${title} image`}
            height={400}
            width={400}
            className="my-6 h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
