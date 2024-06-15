import Image from "next/image";
import React from "react";
import { cn } from "@/helpers";
import Reveal from "./Reveal";

interface CuidadosCardProps {
  title: string;
  texts: string[];
  imgPath: string;
  isActive?: boolean;
  onClick: () => void;
}

export default function CuidadosCard({
  title,
  texts,
  imgPath,
  isActive,
  onClick,
}: CuidadosCardProps) {
  return (
    <Reveal
      onClick={onClick}
      className={cn(
        "group h-fit w-[95%] rounded-3xl bg-[#FFF5D6] px-7 py-3 text-2xl text-gray-900 shadow-xl  hover:cursor-pointer md:w-[85%]",
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
          <div>
            {texts.map((text, index) => (
              <p
                key={index}
                className="my-6 text-justify font-manrope text-xl text-gray-900 md:text-2xl"
              >
                {text}
              </p>
            ))}
          </div>
          <Image
            src={imgPath}
            alt={`${title} image`}
            height={400}
            width={400}
            className="my-6 h-96 object-cover"
          />
        </div>
      </div>
    </Reveal>
  );
}
