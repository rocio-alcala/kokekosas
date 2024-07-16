import getProducts from "@/services/getProducts";
import React from "react";
import ProductCard from "./ProductCard";

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center md:justify-around lg:p-10">
      {products.map((product) => (
        <ProductCard {...product} key={product.name} />
      ))}
    </div>
  );
}
