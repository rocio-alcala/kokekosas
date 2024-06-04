export default function InfiniteCarousel() {
  const carouselText = [
    "MUSGO",
    "-",
    "BOLA",
    "-",
    "PLANTA",
    "-",
    "KOKEDAMA",
    "-",
    "MUSGO",
    "-",
    "BOLA",
    "-",
    "PLANTA",
    "-",
    "KOKEDAMA",
    "-",
    "MUSGO",
    "-",
    "BOLA",
    "-",
    "PLANTA",
    "-",
    "KOKEDAMA",
    "-",
  ];

  return (
    <div className="group flex overflow-hidden hover:animate-none">
      <div className="group-hover:pauseAnimation flex animate-infiniteScroll flex-nowrap bg-black">
        {carouselText.map((text) => (
          <span className="p-5 text-xl font-bold text-white" key={text}>
            {text}
          </span>
        ))}
      </div>
      {/* copia para que se cubra el espacio desplazado hasta que se vuelve a iniciar la animacion */}
      <div className="group-hover:pauseAnimation flex animate-infiniteScroll flex-nowrap bg-black">
        {carouselText.map((text) => (
          <span className="p-5 text-xl font-bold text-white" key={text}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
