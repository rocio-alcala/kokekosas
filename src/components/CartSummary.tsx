import React from "react";
import CartCard from "./CartCard";
import { CartProduct, useCartContext } from "./CartContextProvider";
import Button from "./Button";

export default function CartSummary() {
  const { cart } = useCartContext();

  return (
    <table className="flex w-full flex-col p-6 ">
      <thead>
        <tr className="flex items-center justify-between p-3">
          <th className="text-start">Producto</th>
          <th className="text-start">Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((cartProduct: CartProduct) => (
          <CartCard {...cartProduct} key={cartProduct.id} />
        ))}
      </tbody>
      <Button className="m-3 h-fit w-fit cursor-pointer rounded-3xl bg-transparent p-1.5 text-[#FFF5D6] hover:scale-110 hover:bg-[#FFF5D6] hover:text-gray-700">
        COMPRAR
      </Button>
    </table>
  );
}
