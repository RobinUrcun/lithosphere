import React from "react";

// Import Images //
import homeLogo from "@/public/assets/commande/delivery/homeLogo.webp";
import mondialRelayLogo from "@/public/assets/commande/delivery/mondialRelayLogo.webp";

// Import Components //
import DeliveryCard from "./DeliveryCard";

export default function DeliveryComponent() {
  return (
    <React.Fragment>
      <div className="deliveryCardsWrapper">
        <DeliveryCard title="Mondial Relay" image={mondialRelayLogo} />
        <DeliveryCard title="A domicile" image={homeLogo} />
      </div>
    </React.Fragment>
  );
}
