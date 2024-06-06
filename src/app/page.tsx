import Button from "@/components/Button";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import KokedamaSection from "@/components/KokedamaSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-svh">
        <section
          style={{
            backgroundImage: "url('/kokedama-bg.jpg')",
            backgroundPosition: "bottom",
          }}
          className="flex-center flex h-svh flex-col bg-cover px-6 pt-52 backdrop-blur sm:px-20"
          id="home"
        >
          {" "}
          <div className="absolute inset-0 bg-black/40 "></div>
          <div className="relative z-10">
            <h1 className="shrink font-vidaloka text-6xl font-extrabold text-[#FFF5D6] sm:text-8xl lg:text-9xl">
              Una pieza de arte vivo
            </h1>
            <Button className="ml-1 mt-5 w-fit text-[#FFF5D6] md:border-4 md:text-xl">
              ENCARGA TU KOKEDAMA
            </Button>
          </div>
        </section>
        <section id="kokedama" className="bg-[#FFF5D6]">
          <InfiniteCarousel />
          <KokedamaSection />
        </section>
        <section id="cuidados" className="h-svh bg-slate-500">
          <h2>Trae un pedacito de bosque a tu hogar</h2>
          <h2>Llevate un pedacito de bosque a tu hogar</h2>
          <h2>Vive la magia del bosque en casa</h2>
          <h2>Bosque en miniatura, paz en tu hogar</h2>
          <h2>Las plantas como forma de arte</h2>
          <h2>Un rincón de bosque en cada habitación</h2>
          <h2>Kokedamas como una parte de tu decoracion</h2>
        </section>
        <section id="productos" className="h-svh bg-stone-800"></section>
        <section id="contacto" className="h-svh bg-red-600"></section>
      </main>
    </>
  );
}
