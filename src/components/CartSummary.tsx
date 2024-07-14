import React, { useMemo } from "react";
import CartCard from "./CartCard";
import { CartProduct, useCartContext } from "./CartContextProvider";
import Button from "./Button";
import Link from "next/link";

export default function CartSummary() {
  const { cart } = useCartContext();
  const buyWhatsAppMessage = useMemo(() => {
    let buyString: string = "Hola, quiero comprar:";
    cart.forEach((cartProduct, index) => {
      if (cart.length === 1)
        buyString = buyString + ` ${cartProduct.quantity} ${cartProduct.name}.`;
      if (cart.length > 1) {
        if (cart.length !== index + 1) {
          buyString =
            buyString + ` ${cartProduct.quantity} ${cartProduct.name},`;
        } else {
          buyString =
            buyString + ` y ${cartProduct.quantity} ${cartProduct.name}.`;
        }
      }
    });
    return buyString.split(" ").join("%20");
  }, [cart]);

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
      <Link href={`https://wa.me/543518193522?text=${buyWhatsAppMessage}`}>
        <Button className="m-3 h-fit w-fit cursor-pointer rounded-3xl bg-transparent p-1.5 text-[#FFF5D6] hover:scale-110 hover:bg-[#FFF5D6] hover:text-gray-700">
          COMPRAR
        </Button>
      </Link>
    </table>
  );
}
