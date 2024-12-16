"use client";
import React, { useState } from "react";

// Import Components //
import MondialRelay from "@/app/ui/page/order/delivery/mondialRelay/MondialRelay";
import MondialRelayForm from "@/app/ui/page/order/delivery/mondialRelay/form/MondialRelayForm";
import PriceCard from "@/app/ui/page/order/delivery/mondialRelay/form/PriceCard";
import Paypal from "@/app/ui/components/Paypal/Paypal";

// Import Link //
import Link from "next/link";

export default function page() {
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    road: "",
    CP: "",
    city: "",
    country: "FR",
    id: "",
    deliveryCompany: "MR",
  });

  const [userInfo, setUserInfo] = useState({
    userName: "",
    userSurname: "",
    phone: "",
  });
  console.log(userInfo);

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
          <MondialRelayForm userInfo={userInfo} setUserInfo={setUserInfo} />
          <PriceCard deliveryInfo={deliveryInfo} delivery="MR" />
          <Paypal deliveryInfo={deliveryInfo} userInfo={userInfo} />
        </div>
        <MondialRelay
          deliveryInfo={deliveryInfo}
          setDeliveryInfo={setDeliveryInfo}
        />
      </div>
    </article>
  );
}
