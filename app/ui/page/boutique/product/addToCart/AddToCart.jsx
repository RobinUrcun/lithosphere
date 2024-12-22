"use client";

import React, { useContext } from "react";

// Import Functions //
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
      className="mainButton"
      onClick={() => {
        addToCart(isUserLog, productId)
          .then(() => {
            toast.success("Article ajouté");
          })
          .catch(() => {
            toast.error("Une erreur s'est produite");
          });
      }}
    >
      <p>Ajouter au panier </p>
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
