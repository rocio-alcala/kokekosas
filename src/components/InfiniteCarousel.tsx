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
  ];

  return (
    <div className="flex overflow-hidden">
      <div className="flex animate-infiniteScroll flex-nowrap bg-black">
        {carouselText.map((text) => (
          <span className="p-5 text-xl font-bold text-white" key={text}>
            {text}
          </span>
        ))}
      </div>
      <div className="flex animate-infiniteScroll flex-nowrap bg-black">
        {carouselText.map((text) => (
          <span className="p-5 text-xl font-bold text-white" key={text}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
