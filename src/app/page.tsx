import Image from "next/image";
import { monstera } from "../../public/monstera.jpg";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-black h-svh">
        <Image
          alt={"monstera"}
          src={"/monstera"}
          width={1000}
          height={700}
          className="object-fill"
        ></Image>
      </div>
    </main>
  );
}
