import React from "react";

export default function ClientInfo({ order }) {
  return (
    <div className="orderInfoClient">
      <h4>Infos client</h4>
      <div className="orderInfoWrapper">
        <p> Nom : </p>
        <p>{order?.userSurname}</p>
      </div>
      <div className="orderInfoWrapper">
        <p> Prénom : </p>
        <p>{order?.userName}</p>
      </div>
      <div className="orderInfoWrapper">
        <p> Email : </p>
        <p>{order?.userEmail}</p>
      </div>
    </div>
  );
}
