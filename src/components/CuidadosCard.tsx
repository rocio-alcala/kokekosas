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

          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="min-w-96 max-w-[400px]"
          >
            <defs>
              <pattern
                id={title}
                patternUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <image
                  href={imgPath}
                  preserveAspectRatio="xMidYMid slice"
                  width="100%"
                  height="100%"
                />
              </pattern>
            </defs>
            <path
              fill={`url(#${title})`}
              d="M46.4,-81.1C59.5,-72.7,69.3,-59.1,77.5,-44.8C85.7,-30.4,92.3,-15.2,92,-0.2C91.6,14.8,84.1,29.5,75.8,43.6C67.4,57.7,58.1,71,45.3,78.3C32.5,85.5,16.2,86.5,0.3,86.1C-15.7,85.6,-31.4,83.5,-44.8,76.7C-58.2,69.8,-69.4,58.2,-77,44.6C-84.6,31,-88.6,15.5,-89,-0.2C-89.4,-16,-86.2,-31.9,-78.2,-44.8C-70.2,-57.7,-57.4,-67.5,-43.6,-75.6C-29.8,-83.6,-14.9,-89.8,0.9,-91.3C16.6,-92.7,33.2,-89.5,46.4,-81.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </Reveal>
  );
}
