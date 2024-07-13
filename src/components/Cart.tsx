import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "./CartContextProvider";
import { useState } from "react";
import { cn } from "@/helpers";
import CartSummary from "./CartSummary";
import { IoMdClose } from "react-icons/io";

export default function Cart() {
  const { cart } = useCartContext();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalProductsNumber = cart.reduce(
    (acc, product) => product.quantity + acc,
    0,
  );

  return (
    <>
      <li className="group relative cursor-pointer">
        <FaShoppingCart
          size={25}
          className="fill-[#FFF5D6]"
          onClick={() => setIsCartOpen(!isCartOpen)}
        />
        {totalProductsNumber !== 0 && (
          <span className="absolute -bottom-2 -right-1 h-4 w-4 animate-fadeInTop overflow-hidden rounded-full bg-yellow-500 text-center text-xs font-bold text-black">
            {totalProductsNumber}
          </span>
        )}
      </li>
      <div
        className={cn(
          "fixed right-0 top-0 z-50 flex h-svh max-w-0 flex-col items-center overflow-hidden whitespace-nowrap bg-black font-manrope text-lg text-[#FFF5D6]",
          isCartOpen && "max-w-[700px]",
        )}
      >
        <IoMdClose
          className="mr-7 h-14 cursor-pointer place-self-end fill-[#FFF5D6]"
          size={35}
          onClick={() => setIsCartOpen(false)}
        />
        <h2 className="mb-6 text-xl font-bold ">Tu carrito</h2>
        {cart.length === 0 ? (
          <p className="h-20 p-6 text-center ">
            Todavia no agregaste nada a tu carrito
          </p>
        ) : (
          <CartSummary />
        )}
      </div>
    </>
  );
}
