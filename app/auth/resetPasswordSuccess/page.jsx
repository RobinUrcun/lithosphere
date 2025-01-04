import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="resetPasswordSuccessSection">
      <h1>Mot de passe modifié</h1>
      <p>
        Votre mot de passe a été modifié avec succès. Vous pouvez maintenant
        vous connecter avec votre nouveau mot de passe. Cliquez sur le bouton
        ci-dessous pour accéder à la page de connexion.
      </p>
      <Link href={"/auth/logIn"} className="mainButton">
        Se connecter
      </Link>
    </section>
  );
}
