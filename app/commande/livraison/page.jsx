import React from "react";

// Import Link //
import Link from "next/link";

// Import Components //
import DeliveryComponent from "@/app/ui/page/order/delivery/DeliveryComponent";

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
