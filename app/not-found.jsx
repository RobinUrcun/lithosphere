import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Page Introuvable - Lithosphere 83",
  description:
    "Oups ! La page que vous recherchez n'existe pas ou a été déplacée. Explorez la boutique Lithosphere 83 pour découvrir nos minéraux bruts, polis et bijoux artisanaux.",
};

export default function page() {
  return (
    <section className="errorSection">
      <h1>404</h1>
      <p>Oups, aucune page n'a été trouvée.</p>
      <Link className="mainButton" href={"/"}>
        Retour à l'accueil
      </Link>
    </section>
  );
}
