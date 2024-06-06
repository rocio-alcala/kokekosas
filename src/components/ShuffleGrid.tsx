"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface KokedamaImage {
  imgPath: string;
  id: number;
}

const kokedamaArray = [
  { imgPath: "/kokedama-home-8.jpg", id: 1 },
  { imgPath: "/kokedama-home-9.jpg", id: 2 },
  { imgPath: "/kokedama-deco.jpg", id: 3 },
  { imgPath: "/kokedama-deco-2.jpg", id: 4 },
  { imgPath: "/kokedama-deco-3.jpg", id: 5 },
  { imgPath: "/kokedama-deco-4.jpg", id: 6 },
  { imgPath: "/kokedama-deco-5.jpg", id: 7 },
  { imgPath: "/kokedama-deco-6.jpg", id: 8 },
  { imgPath: "/kokedama-hang-2.jpg", id: 9 },
  { imgPath: "/kokedama-wall.jpg", id: 10 },
  { imgPath: "/kokedama-hang-3.jpg", id: 11 },
  { imgPath: "/kokedama-home-10.jpg", id: 12 },
  { imgPath: "/kokedama-deco-7.jpg", id: 13 },
  { imgPath: "/kokedama-home-7.jpg", id: 14 },
  { imgPath: "/kokedama-home-4.jpg", id: 15 },
  { imgPath: "/kokedama-home-5.jpg", id: 16 },
];

// reordena aleatoriamente un array
function shuffle(array: KokedamaImage[]) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    // obtiene un numero aleatorio entre 0 y currentIndex
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function generateSquares() {
  return shuffle(kokedamaArray).map((sq) => (
    <motion.img
      src={sq.imgPath}
      key={sq.id}
      className="h-full w-full object-cover"
      layout // animate to new position if changes
      transition={{ duration: 1.5, type: "spring" }}
    />
  ));
}

export default function ShuffleGrid() {
  const [squares, setSquares] = useState(generateSquares());
  const shuffleTimeOut = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // seteo de un intervalo que calculara un nuevo shuffle cada 4000ms
    shuffleTimeOut.current = setInterval(
      () => setSquares(generateSquares()),
      4000,
    );
    // limpiar el intervalo cuando se desmonta el componente para asegurarnos que haya solo uno iniciado
    return () => {
      if (shuffleTimeOut.current) clearInterval(shuffleTimeOut.current);
    };
  }, []);

  return (
    <div className="grid max-h-[800px] grid-cols-4 grid-rows-4 gap-1">
      {squares}
    </div>
  );
}
