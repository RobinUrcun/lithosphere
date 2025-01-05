import React from "react";

// Import Link //
import Link from "next/link";

// Import Components //
import DeliveryComponent from "@/app/ui/page/order/delivery/DeliveryComponent";

export const metadata = {
  title: "Choisissez votre Mode de Livraison | Lithosphere 83",
  description:
    "Sélectionnez l’option de livraison qui vous convient pour vos achats Lithosphere 83. Livraison rapide, sécurisée et adaptée à vos besoins.",
};

export default function page() {
  return (
    <article className="deliverySection">
      <div className="navBar">
        <Link className="backButton" href="/commande/panier">
          retour
        </Link>
      </div>
      <h1>Choisissez votre mode de livraison</h1>
      <DeliveryComponent />
    </article>
  );
}
