"use client";

import React, { useState } from "react";

// Import Components //
import HomeDeliveryForm from "@/app/ui/page/order/delivery/homeDelivery/form/HomeDeliveryForm";
import PriceCard from "@/app/ui/page/order/delivery/mondialRelay/form/PriceCard";
import Paypal from "@/app/ui/components/Paypal/Paypal";

export default function HomeDeliveryComponent() {
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
  );
}
