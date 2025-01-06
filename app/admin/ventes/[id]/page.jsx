"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

// Import Link //
import Link from "next/link";

// Import Components //
import ClientInfo from "@/app/ui/page/admin/clientInfo/ClientInfo";
import OrderInfo from "@/app/ui/page/admin/orderInfo/OrderInfo";

export default function page() {
  const router = useRouter();
  const params = useParams();

  const [order, setOrder] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.lithosphere83.fr/api/user/order/${params.id}`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setOrder(data.data[0]);
            setIsLoading(false);
          });
        } else {
          setIsLoading(false);
          router.push("/auth/logIn");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        router.push("/auth/logIn");
      });
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
