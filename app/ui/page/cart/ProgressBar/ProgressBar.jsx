import React from "react";

export default function ProgressBar() {
  return (
    <div className="progressBar">
      <div className="progressBarWrapper">
        <div className="step">
          <div className="stepNbr">1</div>
          <div className="stepTitle">Votre panier</div>
        </div>
        <div className="step">
          <div className="stepNbr">2</div>
          <div className="stepTitle">Mode de livraison</div>
        </div>
        <div className="step">
          <div className="stepNbr">3</div>
          <div className="stepTitle">Informations de livraison</div>
        </div>
        <div className="step">
          <div className="stepNbr">4</div>
          <div className="stepTitle">Paiement</div>
        </div>
      </div>
    </div>
  );
}
