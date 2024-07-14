import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "./CartContextProvider";
import { Dispatch, SetStateAction } from "react";

interface CartProps {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Cart({ isCartOpen, setIsCartOpen }: CartProps) {
  const { cart } = useCartContext();

  const totalProductsNumber = cart.reduce(
    (acc, product) => product.quantity + acc,
    0,
  );

  return (
    <>
      <li className="group relative flex cursor-pointer items-center">
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
    </>
  );
}
