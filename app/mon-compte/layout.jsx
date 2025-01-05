import React from "react";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Import Components //
import UserNav from "../ui/page/mon-compte/nav/UserNav";

export const metadata = {
  title: "Mon Compte - Commandes et Informations Personnelles | Lithosphere 83",
  description:
    "Accédez à votre espace personnel sur Lithosphere 83. Consultez vos commandes, suivez leur statut et mettez à jour vos informations personnelles. Gérez votre compte en toute sécurité.",
};

export default async function layout({ children }) {
  const cookieStore = await cookies();
  const userToken = cookieStore.get("userToken");
  if (!userToken) {
    return redirect("/auth/logIn");
  }

  return (
    <section className="accountSection">
      <UserNav />
      {children}
    </section>
  );
}
