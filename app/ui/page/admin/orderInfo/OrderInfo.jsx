import React from "react";

import { formatDate } from "@/app/utils/functions/formatDate";

export default function OrderInfo({ order }) {
  return (
    <div className="orderInfoDelivery">
      <h4>Infos livraison</h4>
      <div className="orderInfoWrapper">
        <p> Nom de livraison : </p>
        <p>{order?.deliverySurname}</p>
      </div>
      <div className="orderInfoWrapper">
        <p> Prénom de livraison : </p>
        <p>{order?.deliveryName}</p>
      </div>
      <div className="orderInfoWrapper">
        <p> Téléphone : </p>
        <p>{order?.phone}</p>
      </div>
      <div className="orderInfoWrapper">
        <p> Email : </p>
        <p>{order?.userEmail}</p>
      </div>
      <div className="orderInfoWrapper">
        <p> Date de commande : </p>
        <p>{order?.date ? formatDate(parseInt(order?.date)) : null}</p>
      </div>
      <div className="orderInfoWrapper">
        <p> Type de livraison : </p>
        <p>{order?.deliveryCompany}</p>
      </div>
      {order?.deliveryCompany === "MR" ? (
        <div className="orderInfoWrapper">
          <p> Nom du Point Relay : </p>
          <p>{order?.deliveryShopName}</p>
        </div>
      ) : null}
      <div className="orderInfoWrapper">
        <p> Route : </p>
        <p>{order?.deliveryRoad}</p>
      </div>
      <div className="orderInfoWrapper">
        <p> Ville : </p>
        <p>{order?.deliveryCity}</p>
      </div>
      <div className="orderInfoWrapper">
        <p> Code Postal : </p>
        <p>{order?.deliveryCP}</p>
      </div>
      <div className="orderInfoWrapper">
        <p> Pays : </p>
        <p>{order?.deliveryCountry}</p>
      </div>
      <div className="orderInfoWrapper">
        <p>Panier : </p>
        <table className="orderInfoTable">
          <thead>
            <tr>
              <th scope="col">Produit</th>
              <th scope="col">Prix</th>
              <th scope="col">Ref</th>
            </tr>
          </thead>
          <tbody>
            {order?.products.map((produit, index) => (
              <tr key={index}>
                <td>{produit.title}</td>
                <td>
                  {(produit.price / 100).toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td>{produit.reference}</td>
              </tr>
            ))}
            <tr>
              <td>Total :</td>
              <td>
                {order?.total
                  ? parseFloat(order?.total / 100).toLocaleString("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      minimumFractionDigits: 2,
                    })
                  : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
