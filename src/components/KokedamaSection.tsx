import ShuffleGrid from "./ShuffleGrid";

export default function KokedamaSection() {
  return (
    <>
      {/*       <AnimacionKokedama /> */}
      <div className="transition-basis flex flex-col items-center gap-12 bg-[#FFF5D6] p-5 font-manrope text-2xl text-gray-900 duration-500 sm:p-12 md:p-20  lg:flex-row">
        <div className="flex flex-col gap-8 lg:w-[45%]">
          <h2 className="my-4 font-vidaloka text-5xl font-bold tracking-wide text-black md:text-7xl">
            El arte de la kokedama
          </h2>
          <p>
            El nombre Kokedama se traduce literalmente del japonés como "koke",
            que significa musgo, y "dama", que significa bola:{" "}
            <span className="font-bold">"bola de musgo"</span>
          </p>
          <p>
            Las kokedamas surgieron inicialmente como una manera de democratizar
            el arte del bonsái. Mientras que los bonsáis a menudo requieren años
            de cuidadosa formación y mantenimiento, las kokedamas ofrecen una
            forma más simple y asequible de plasmar este tipo de arte.
          </p>
          <p className="z-20 font-semibold">
            Para nosotros, la kokedama no es solo una técnica de jardinería,
            sino una forma de <span className="font-extrabold">arte viva</span>{" "}
            . Nos permite traer un{" "}
            <span className="font-extrabold">rincón del bosque</span> a nuestros
            hogares, liberándonos de la necesidad de contenerlo en una maceta.
          </p>
        </div>
        <div className="lg:w-[55%]">
          <ShuffleGrid />
        </div>
      </div>
    </>
  );
}
