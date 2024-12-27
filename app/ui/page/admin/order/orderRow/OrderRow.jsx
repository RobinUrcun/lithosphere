import React from "react";
import Link from "next/link";

// Import Functions //
import { formatDate } from "@/app/utils/functions/formatDate";

export default function OrderRow({ orderId, productList, total, date }) {
  return (
    <div className="orderRow">
      <div className="orderIdBox">
        <Link href={`/admin/ventes/${orderId}`}>{orderId}</Link>
        <p>{formatDate(parseInt(date))}</p>
      </div>
      <div className="productBox">
        {productList.map((product, index) => (
          <p className="orderProductList" key={`${product.title} ${index}`}>
            {product.title} :{" "}
            {(product.price / 100).toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 2,
            })}
          </p>
        ))}
      </div>
      <div className="priceBox">
        {(total / 100).toLocaleString("fr-FR", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 2,
        })}
      </div>
    </div>
  );
}
