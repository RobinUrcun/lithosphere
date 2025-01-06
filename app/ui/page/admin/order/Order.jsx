"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

// Import Components //
import OrderRow from "./orderRow/OrderRow";
import Loader from "@/app/ui/components/loader/Loader";

export default function Order() {
  const router = useRouter();
  const [ordersList, setOrdersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://api.lithosphere83.fr/api/user/getAllOrders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        response
          .json()
          .then((data) => {
            setOrdersList(data.orderList);
            setIsLoading(false);
          })
          .catch(() => router.push("/erreur"));
      } else {
        router.push("/erreur");
      }
    });
  }, []);
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="ordersWrapper">
        <div className="orderRow">
          <div className="orderIdBox">Numéro de commande</div>
          <div className="productBox">Produit(s)</div>
          <div className="priceBox">Montant</div>
        </div>
        {ordersList.map((order) => (
          <OrderRow
            key={order.orderID}
            orderId={order.orderID}
            date={order.date}
            productList={order.products}
            total={order.total}
          />
        ))}
      </div>
    );
  }
}
