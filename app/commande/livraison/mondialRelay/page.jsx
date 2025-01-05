import React from "react";

// Import Components //
import MondialRelayComponent from "@/app/ui/page/order/delivery/mondialRelay/MondialRelayComponent";

// Import Link //
import Link from "next/link";

export const metadata = {
  title: "Renseignez vos Informations de Livraison | Lithosphere 83",
  description:
    "Saisissez vos coordonnées pour la livraison de vos minéraux et bijoux artisanaux Lithosphere 83. Livraison personnalisée et en toute sécurité.",
};

export default function page() {
  return (
    <article className="mondialRelayArticle">
      <div className="navBar">
        <Link className="backButton" href="/commande/livraison">
          retour
        </Link>
      </div>
      <MondialRelayComponent />
    </article>
  );
}
