"use client";

import React, { useContext } from "react";

// Import Functions //
import { addToCart } from "@/app/utils/functions/cart/addToCart";
import { AuthContext } from "@/app/context/AuthContext";

// Import Context //

export default function AddToCart({ productId }) {
  const { isUserLog, setIsUserLog } = useContext(AuthContext);
  return (
    <div
      className="mainButton"
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
      Ajouter au panier
    </div>
  );
}
