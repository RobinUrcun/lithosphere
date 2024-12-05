"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function OrderIdCard() {
  const pathName = usePathname();
  console.log(pathName);

  const orderId = pathName.split("/")[2];

  return (
    <div className="orderIdCard">Votre numéro de commande est : {orderId}</div>
  );
}
