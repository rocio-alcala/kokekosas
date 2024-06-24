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
        <div className="flex flex-col items-center gap-5 overflow-hidden lg:flex-row">
          <div>
            {texts.map((text, index) => (
              <p
                key={index}
                className="text-justify font-manrope text-xl text-gray-900 md:px-5 md:py-3 md:text-left md:text-2xl"
              >
                {text}
              </p>
            ))}
          </div>

          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="img1"
                patternUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <image
                  href={imgPath}
                  preserveAspectRatio="none"
                  width="100%"
                  height="100%"
                />
              </pattern>
            </defs>
            <path
              fill="url(#img1)"
              d="M41.7,-72.1C55.7,-64.2,69.9,-56.4,77.9,-44.4C85.8,-32.4,87.6,-16.2,86.2,-0.8C84.7,14.5,80,29,72.8,42.2C65.5,55.5,55.7,67.4,43.1,75.7C30.5,84,15.3,88.7,0.9,87.1C-13.5,85.6,-27,77.8,-40.6,70.2C-54.2,62.5,-68,54.8,-77,43.2C-86,31.5,-90.2,15.7,-89.2,0.6C-88.2,-14.6,-82,-29.2,-73.5,-41.7C-65,-54.3,-54.2,-64.8,-41.6,-73.5C-29,-82.3,-14.5,-89.2,-0.3,-88.7C13.9,-88.1,27.7,-80.1,41.7,-72.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </Reveal>
  );
}
