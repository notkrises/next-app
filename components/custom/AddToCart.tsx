"use client";
import React from "react";
import { Button } from "../ui/button";

const AddToCart = () => {
  return (
    <div>
      <Button variant="ghost" onClick={() => console.log("Clicked")}>
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
