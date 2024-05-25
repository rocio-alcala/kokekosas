"use client";

import Button from "@/components/Button";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-svh">
        <section
          className="flex h-svh flex-col bg-black px-6 pt-64 sm:px-20"
          id="home"
        >
          <h1 className="shrink text-6xl font-extrabold tracking-widest text-white sm:text-8xl lg:text-9xl">
            KOKEKOSAS
          </h1>
          <Button className="w-fit text-white"> ENCARGA TU KOKEDAMA </Button>
        </section>
        <section id="kokedama" className=" h-svh bg-yellow-300"></section>
        <section id="cuidados" className="h-svh bg-slate-500"></section>
        <section id="productos" className="h-svh bg-stone-800"></section>
        <section id="contacto" className="h-svh bg-red-600"></section>
      </main>
    </>
  );
}
