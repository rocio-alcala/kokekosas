import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <Reveal>
      <section
        id="contacto"
        className="relative bottom-40 rounded-3xl bg-black p-6 text-center font-manrope text-2xl text-[#FFF5D6] shadow-md md:p-10"
      >
        <div className="flex flex-col items-center justify-center pb-6">
          <h2 className="p-5 text-center font-vidaloka text-4xl font-bold tracking-wide text-[#FFF5D6] md:text-5xl">
            Nos queres preguntar algo?
          </h2>
          <p>Llena el formulario o escribinos por whatsapp</p>
        </div>
        <ContactForm />
      </section>
    </Reveal>
  );
}
