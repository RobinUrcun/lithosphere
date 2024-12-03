"use client";

import React, { useContext } from "react";
// Import Image //
import Image from "next/image";
import basketPicture from "@/public/icons/basket.svg";

// Import Add to Cart Function //
import { addToCart } from "@/app/utils/functions/cart/addToCart";

// Import Context //
import { AuthContext } from "@/app/context/AuthContext";

export default function AddToCart({ productId }) {
  const { isUserLog, setIsUserLog } = useContext(AuthContext);
  return (
    <div
      className="productCardAdd"
      onClick={() => {
        addToCart(isUserLog, productId)
          .then(() => {
            console.log("ici mettre alerte succes");
          })
          .catch((err) => {
            console.log("ici mettre alerte echec");
          });
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
