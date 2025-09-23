import AddToCart from "@/app/components/AddToCart";
import React from "react";

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-red-900 text-white text-xl border-4 border-black hover:border-b-gray-950 hover:bg-fuchsia-950">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
