import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface CuidadosCardProps {
  title: string;
  text: string;
  imgPath: string;
}

export default function CuidadosCard({
  title,
  text,
  imgPath,
}: CuidadosCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-8 p-10 text-2xl text-[#FFF5D6] md:flex-row"
    >
      <div className="flex flex-col gap-5 self-stretch">
        <h3 className="font-vidaloka text-5xl font-bold">{title}</h3>
        <p>{text}</p>
      </div>
      <Image
        src={imgPath}
        alt={`${title} image`}
        height={300}
        width={400}
        className="self-stretch object-cover"
      />
    </motion.div>
  );
}
