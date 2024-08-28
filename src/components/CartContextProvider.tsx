"use client";

import { isInLocalStorage, isRunningOnClient } from "@/helpers";
import { Product } from "@/services/getProducts";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type CartProduct = Product & { quantity: number };

interface CartContext {
  setCart: Dispatch<SetStateAction<[] | CartProduct[]>>;
  cart:  CartProduct [];
  addProduct: (product: Product) => void;
  removeProduct: (id: Product["id"]) => void;
}

export const CartContext = createContext<CartContext | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState< CartProduct [] | []>(
    isRunningOnClient() ? isInLocalStorage("cart") || [] : [],
  );

  function addProduct(product: Product) {
    const productIndex = cart.findIndex(
      (cartProduct) => cartProduct.id === product.id,
    );
    if (productIndex !== -1) {
      const newCart = cart.map((cartProduct) => {
        if (cartProduct.id === product.id)
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        return cartProduct;
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
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
    localStorage.setItem("cart", JSON.stringify(newCart));
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
