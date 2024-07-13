"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Product } from "./ProductSection";

export interface CartProduct {
  id: number;
  quantity: number;
  name: string;
}

interface CartContext {
  setCart: Dispatch<SetStateAction<[] | CartProduct[]>>;
  cart: CartProduct[];
  addProduct: (id: Product["id"], name: Product["name"]) => void;
  removeProduct: (id: Product["id"]) => void
}

export const CartContext = createContext<CartContext | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartProduct[] | []>([]);
  function addProduct(id: Product["id"], name: Product["name"]) {
    const productIndex = cart.findIndex((cartProduct) => cartProduct.id === id);
    if (productIndex !== -1) {
      const newCart = cart.map((cartProduct) => {
        if (cartProduct.id === id)
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        return cartProduct;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { name: name, id: id, quantity: 1 }]);
    }
  }

  function removeProduct(id: Product["id"]) {
    const newCart = cart
      .map((cartProduct) => {
        if (cartProduct.id === id)
          return { ...cartProduct, quantity: cartProduct.quantity - 1 };
        return cartProduct;
      })
      .filter((cartProduct) => cartProduct.quantity > 0);
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Cart context should be used inside CartContextProvider");
  }
  return context;
}
