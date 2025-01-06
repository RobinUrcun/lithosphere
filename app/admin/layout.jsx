import React from "react";

// Import Functions //
import { fetchData } from "../utils/functions/fetchData";

// Import Cookies //
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

// Import Components //
import AdminNav from "../ui/page/admin/AdminNav";

export const metadata = {
  title: "Administration - Gestion des Produits | Lithosphere 83",
  description:
    "Accédez à l'interface d'administration de Lithosphere 83 pour gérer vos produits. Ajoutez, modifiez ou supprimez des minéraux, bijoux artisanaux et autres articles de la boutique. Optimisez votre catalogue en toute simplicité.",
};

export default async function layout({ children }) {
  const cookieStore = await cookies();
  console.log("store", cookieStore);

  const userToken = cookieStore.get("userToken");
  if (!userToken) {
    return redirect("/auth/logIn");
  }
  try {
    const response = await fetchData(
      "https://api.lithosphere83.fr/api/user/role",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: userToken.value,
        },
        credentials: "include",
      }
    );

    if (response.role !== "ADMIN") {
      throw new Error("Role ADMIN requis");
    }
  } catch (error) {
    notFound();
  }

  return (
    <section className="accountSection">
      <AdminNav />
      {children}
    </section>
  );
}
