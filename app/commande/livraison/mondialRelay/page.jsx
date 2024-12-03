"use client";
import React, { useState } from "react";

// Import Components //
import MondialRelay from "@/app/ui/page/order/delivery/mondialRelay/MondialRelay";
import MondialRelayForm from "@/app/ui/page/order/delivery/mondialRelay/form/MondialRelayForm";

// Import Link //
import Link from "next/link";

export default function page() {
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    road: "",
    CP: "",
    city: "",
    country: "",
    id: "",
    deliveryCompany: "MR",
  });

  console.log(deliveryInfo);

  return (
    <article className="mondialRelayArticle">
      <div className="navBar">
        <Link className="backButton" href="/commande/livraison">
          retour
        </Link>
      </div>
      <div className="articleWrapper">
        <div className="formWrapper">
          <h1>Information de livraison</h1>
          <MondialRelayForm />
        </div>
        <MondialRelay
          deliveryInfo={deliveryInfo}
          setDeliveryInfo={setDeliveryInfo}
        />
      </div>
    </article>
  );
}
