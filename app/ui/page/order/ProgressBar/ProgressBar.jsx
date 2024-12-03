"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function ProgressBar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="progressBar">
      <div className="progressBarWrapper">
        <div className="step">
          <div className="stepNbr complete">1</div>
          <div className="stepTitle">Votre panier</div>
        </div>
        <div className={`step`}>
          <div
            className={`stepNbr  ${
              pathname == "/commande/livraison" ? "complete" : null
            }`}
          >
            2
          </div>
          <div className="stepTitle">Mode de livraison</div>
        </div>
        <div className="step">
          <div className="stepNbr">3</div>
          <div className="stepTitle">Informations de livraison</div>
        </div>
      </div>
    </div>
  );
}
