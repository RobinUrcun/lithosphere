"use client";
import React, { useContext, useEffect, useState } from "react";

// Import Link //
import Link from "next/link";

// Import Image //
import Image from "next/image";
import { OrderContext } from "@/app/context/OrderContext";

// Shipping Functions //
import shippingFunctionMR from "@/app/utils/shippingFunction/shippingFunctionMR";
import shippingFunctionCM from "@/app/utils/shippingFunction/shippingFunctionCM";

export default function DeliveryCard({ title, image }) {
  const { productList } = useContext(OrderContext);
  const [shippingPrice, setShippingPrice] = useState();

  useEffect(() => {
    const totalCart = productList.reduce(
      (total, produit) => total + produit.price,
      0
    );

    if (totalCart > 8000) {
      setShippingPrice(0);
    } else {
      if (title === "Mondial Relay") {
        setShippingPrice(shippingFunctionMR(productList, "FR"));
      } else {
        setShippingPrice(shippingFunctionCM(productList, "FR"));
      }
    }
  }, [productList]);

  return (
    <Link
      href={`/commande/livraison/${
        title === "Mondial Relay" ? "mondialRelay" : "domicile"
      }`}
      className="deliveryCard"
    >
      <Image src={image} width={150} height={150} alt={title} />
      <h2>{title}</h2>
      <p>
        {!shippingPrice
          ? "Offert"
          : (shippingPrice / 100).toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 2,
            })}
      </p>
    </Link>
  );
}
