import React from "react";

// Import Components //
import CartComponent from "../../ui/page/order/cart/CartComponent";

export default async function page() {
  return (
    <article className="cartSection">
      <h1>Votre Panier</h1>
      <CartComponent />
    </article>
  );
}
