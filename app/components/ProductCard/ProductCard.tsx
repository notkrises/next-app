import AddToCart from "@/app/components/AddToCart";
import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
