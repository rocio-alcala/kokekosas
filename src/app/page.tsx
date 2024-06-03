import Button from "@/components/Button";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-svh">
        <section
          style={{
            backgroundImage: "url('/monstera.jpg')",
          }}
          className="flex h-svh flex-col bg-cover px-6 pt-64 sm:px-20"
          id="home"
        >
          <h1 className="shrink text-6xl font-extrabold tracking-widest text-white sm:text-8xl lg:text-9xl">
            KOKEKOSAS
          </h1>
          <Button className="w-fit text-white"> ENCARGA TU KOKEDAMA </Button>
        </section>
        <section id="kokedama" className=" h-svh bg-black">
          <InfiniteCarousel />
        </section>
        <section id="cuidados" className="h-svh bg-slate-500"></section>
        <section id="productos" className="h-svh bg-stone-800"></section>
        <section id="contacto" className="h-svh bg-red-600"></section>
      </main>
    </>
  );
}
