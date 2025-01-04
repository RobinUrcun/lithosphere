"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function ProgressBar() {
  const pathname = usePathname();

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
              pathname.includes("livraison") ? "complete" : null
            }`}
          >
            2
          </div>
          <div className="stepTitle">Livraison</div>
        </div>
        <div className="step">
          <div
            className={`stepNbr ${
              pathname.includes("mondialRelay") || pathname.includes("domicile")
                ? "complete"
                : null
            }`}
          >
            3
          </div>
          <div className="stepTitle">Informations</div>
        </div>
      </div>
    </div>
  );
}
