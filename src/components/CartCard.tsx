import React from "react";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { CartProduct, useCartContext } from "./CartContextProvider";

export default function CartCard({
  cartProduct,
}: {
  cartProduct: CartProduct;
}) {
  const { addProduct, removeProduct } = useCartContext();
  return (
    <tr className="flex items-center justify-between p-3">
      <td className=" whitespace-normal text-start">{cartProduct.name}</td>
      <td className="flex w-[90px] items-center justify-end gap-1">
        <IoIosRemoveCircle onClick={() => removeProduct(cartProduct.id)} />
        {cartProduct.quantity}
        <IoIosAddCircle onClick={() => addProduct(cartProduct)} />
      </td>
    </tr>
  );
}
