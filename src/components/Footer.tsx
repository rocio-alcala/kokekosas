import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="flex animate-fadeIn flex-wrap items-start justify-between gap-5 bg-black p-10 font-manrope text-[#FFF5D6] md:px-16">
      <p className="p-5">
        Copyright 2024{" "}
        <span className="underline">
          <Link href={"https://github.com/rocio-alcala"}>@rocio-alcala</Link>
        </span>
      </p>
      <div className="flex flex-col gap-3 p-5">
        <p>
          Correo: <span className=" font-bold"> kokekosas@gmail.com</span>
        </p>
        <p className="flex items-center gap-1 text-nowrap">
          Telefono: <span className="font-bold">+54 9 3518193522</span>
          <Link
            href={
              "https://wa.me/5493518193522?text=Hola,%20quiero%20consultar%20por%20kokedamas"
            }
          >
            <BsWhatsapp size={22} />
          </Link>
        </p>
      </div>
      <div className="flex gap-8 p-5">
        <Link href={"https://www.facebook.com/Kokekosas"}>
          <ImFacebook2 size={25} />
        </Link>
        <Link href={"https://www.instagram.com/kokekosas"}>
          <GrInstagram size={25} />
        </Link>
      </div>
    </footer>
  );
}
