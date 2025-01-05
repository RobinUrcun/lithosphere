import React from "react";

// Import Components //
import CartComponent from "../../ui/page/order/cart/CartComponent";
export const metadata = {
  title: "Votre Panier - Préparez Votre Commande | Lithosphere 83",
  description:
    "Consultez les articles de votre panier avant de finaliser votre commande sur Lithosphere 83. Minéraux bruts, polis et bijoux artisanaux : préparez votre achat dès maintenant.",
};

export default async function page() {
  return (
    <article className="cartSection">
      <h1>Votre Panier</h1>
      <CartComponent />
    </article>
  );
}
