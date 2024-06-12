import Button from "@/components/Button";
import CuidadosSection from "@/components/CuidadosSection";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import KokedamaSection from "@/components/KokedamaSection";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-svh ">
        <section
          style={{
            backgroundImage: "url('/kokedama-bg.jpg')",
            backgroundPosition: "bottom",
          }}
          className="flex-center flex h-svh flex-col bg-cover px-6 pt-52 backdrop-blur sm:px-20"
          id="home"
        >
          <div className="absolute inset-0 bg-black/40 "></div>
          <div className="relative z-10">
            <h1 className="shrink font-vidaloka text-6xl font-extrabold text-[#FFF5D6] transition-all duration-300 sm:text-8xl lg:text-9xl">
              Una pieza de arte vivo
            </h1>
            <Button className="ml-1 mt-5 w-fit border-[#FFF5D6] text-[#FFF5D6] md:border-4 md:text-2xl">
              ENCARGA TU KOKEDAMA
            </Button>
          </div>
        </section>
        <section id="kokedama" className=" bg-[#FFF5D6]">
          <InfiniteCarousel />

          <KokedamaSection />
        </section>
        <Image
          src={"/wave-1.svg"}
          alt="wave"
          height={100}
          width={1000}
          className="w-full"
        />
        <section id="cuidados" className="bg-[#904B31] p-12 md:py-24">
          <CuidadosSection />
        </section>
        <Image
          src={"/wave-2.svg"}
          alt="wave"
          height={100}
          width={1000}
          className="w-full"
        />
        <section id="productos" className="bg-[#FFF5D6]"></section>
        <section id="contacto" className="h-svh bg-[#FFF5D6]"></section>
      </main>
    </>
  );
}
