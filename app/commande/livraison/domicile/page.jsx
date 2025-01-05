import React from "react";

// Import Link //
import Link from "next/link";

// Import Components //

import HomeDeliveryComponent from "@/app/ui/page/order/delivery/homeDelivery/HomeDeliveryComponent";

export const metadata = {
  title: "Renseignez vos Informations de Livraison | Lithosphere 83",
  description:
    "Saisissez vos coordonnées pour la livraison de vos minéraux et bijoux artisanaux Lithosphere 83. Livraison personnalisée et en toute sécurité.",
};

export default function page() {
  return (
    <article className="homeDeliveryArticle">
      <div className="navBar">
        <Link className="backButton" href="/commande/livraison">
          retour
        </Link>
      </div>
      <HomeDeliveryComponent />
    </article>
  );
}
