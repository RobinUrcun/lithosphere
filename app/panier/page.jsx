import React from "react";

// Import Cookies //
import { cookies } from "next/headers";

// Import Components //
import CartComponent from "../ui/page/cart/CartComponent";

export default async function page() {
  const cookieStore = await cookies();
  const isUserLog = cookieStore.get("userToken") ? true : false;

  return (
    <div className="cartSection">
      <h1>Votre Panier</h1>
      <CartComponent isUserLog={isUserLog} />
    </div>
  );
}
