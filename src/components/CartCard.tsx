import React from "react";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { CartProduct, useCartContext } from "./CartContextProvider";

export default function CartCard({ name, quantity, id }: CartProduct) {
  const { addProduct, removeProduct } = useCartContext();
  return (
    <tr className="flex items-center justify-between p-3">
      <td className=" whitespace-normal text-start">{name}</td>
      <td className="flex w-[90px] items-center justify-end gap-1">
        <IoIosRemoveCircle onClick={() => removeProduct(id)} />
        {quantity}
        <IoIosAddCircle onClick={() => addProduct(id, name)} />
      </td>
    </tr>
  );
}
