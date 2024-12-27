"use client";

import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

// Import Link //
import Link from "next/link";

// Import Components //
import ClientInfo from "@/app/ui/page/admin/clientInfo/ClientInfo";
import OrderInfo from "@/app/ui/page/admin/orderInfo/OrderInfo";

export default function page() {
  const params = useParams();

  const [order, setOrder] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/user/order/${params.id}`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        response.json().then((data) => {
          setOrder(data.data[0]);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Link className="backButton" href="/admin/ventes">
        Retour
      </Link>
      <div className="saleWrapper">
        <h3>Commande: {params.id}</h3>
        <ClientInfo order={order} />
        <OrderInfo order={order} />
      </div>
    </React.Fragment>
  );
}
