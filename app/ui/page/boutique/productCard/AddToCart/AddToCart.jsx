"use client";

import React from "react";
// Import Image //
import Image from "next/image";
import basketPicture from "@/public/icons/basket.svg";

// Import Add to Cart Function //
import { addToCart } from "@/app/utils/functions/cart/addToCart";

export default function AddToCart({ productId }) {
  return (
    <div
      className="productCardAdd"
      onClick={() => {
        addToCart(productId);
      }}
    >
      <Image
        src={basketPicture}
        width={30}
        height={30}
        alt="Ajouter au panier"
      />
    </div>
  );
}
