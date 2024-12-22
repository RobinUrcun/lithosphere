"use client";

import React, { useContext } from "react";
// Import Image //
import Image from "next/image";
import basketPicture from "@/public/icons/basket.svg";

// Import Add to Cart Function //
import { addToCart } from "@/app/utils/functions/cart/addToCart";

// Import Context //
import { AuthContext } from "@/app/context/AuthContext";

// Import Toast //
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddToCart({ productId }) {
  const { isUserLog, setIsUserLog } = useContext(AuthContext);
  return (
    <div
      className="productCardAdd"
      onClick={() => {
        addToCart(isUserLog, productId)
          .then(() => {
            toast.success("Article ajouté");
          })
          .catch((err) => {
            toast.error("Une erreur s'est produite");
          });
      }}
    >
      <Image
        src={basketPicture}
        width={30}
        height={30}
        alt="Ajouter au panier"
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}
