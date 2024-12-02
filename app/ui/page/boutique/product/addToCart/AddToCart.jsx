"use client";

import React from "react";

// Import Functions //
import { addToCart } from "@/app/utils/functions/cart/addToCart";

export default function AddToCart({ productId }) {
  console.log(productId);

  return (
    <div
      className="mainButton"
      onClick={() => {
        addToCart(productId);
      }}
    >
      Ajouter au panier
    </div>
  );
}
