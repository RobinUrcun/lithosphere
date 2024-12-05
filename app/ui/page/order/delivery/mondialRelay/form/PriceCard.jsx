"use client";

import { OrderContext } from "@/app/context/OrderContext";
import React, { useContext, useState, useEffect } from "react";

// Shipping Functions //
import shippingFunctionMR from "@/app/utils/shippingFunction/shippingFunctionMR";

export default function PriceCard({ deliveryInfo }) {
  const { productList, setProductList } = useContext(OrderContext);
  const [shippingPrice, setShippingPrice] = useState(0);
  const totalCart = productList.reduce(
    (total, produit) => total + produit.price,
    0
  );
  useEffect(() => {
    if (totalCart > 8000) {
      setShippingPrice(0);
    } else {
      setShippingPrice(shippingFunctionMR(productList, deliveryInfo.country));
    }
  }, [productList, deliveryInfo]);

  return (
    <div className="priceCard">
      <div className="carWrapper">
        Panier :{" "}
        {(totalCart / 100).toLocaleString("fr-FR", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 2,
        })}
      </div>
      <div className="shippingCostWrapper">
        Frais de port :{" "}
        {!shippingPrice
          ? "Offert"
          : (shippingPrice / 100).toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 2,
            })}
      </div>
      <div className="totalPriceWrapper">
        total :{" "}
        {(
          ((shippingPrice === "Livraison offerte" ? 0 : shippingPrice) +
            totalCart) /
          100
        ).toLocaleString("fr-FR", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 2,
        })}
      </div>
    </div>
  );
}
