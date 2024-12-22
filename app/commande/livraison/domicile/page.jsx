"use client";
import React, { useState } from "react";

// Import Link //
import Link from "next/link";

// Import Components //
import HomeDeliveryForm from "@/app/ui/page/order/delivery/homeDelivery/form/HomeDeliveryForm";
import PriceCard from "@/app/ui/page/order/delivery/mondialRelay/form/PriceCard";
import Paypal from "@/app/ui/components/Paypal/Paypal";

export default function page() {
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    road: "",
    CP: "",
    city: "",
    country: "FR",
    id: "",
    deliveryCompany: "CP",
  });
  const [userInfo, setUserInfo] = useState({
    userName: "",
    userSurname: "",
    phone: "",
  });

  return (
    <article className="homeDeliveryArticle">
      <div className="navBar">
        <Link className="backButton" href="/commande/livraison">
          retour
        </Link>
      </div>
      <div className="articleWrapper">
        <div className="formWrapper">
          <h1>Information de livraison</h1>
          <HomeDeliveryForm
            deliveryInfo={deliveryInfo}
            setDeliveryInfo={setDeliveryInfo}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </div>
        <div className="paiementWrapper">
          <PriceCard deliveryInfo={deliveryInfo} delivery="CP" />
          <Paypal deliveryInfo={deliveryInfo} userInfo={userInfo} />
        </div>
      </div>
    </article>
  );
}
