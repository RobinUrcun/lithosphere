import React from "react";

// Import Components //
import LogInForm from "@/app/ui/components/Form/logIn/LogInForm";

// Import Link //
import Link from "next/link";

export const metadata = {
  title: "Connexion - Accédez à votre Compte | Lithosphere 83",
  description:
    "Connectez-vous à votre compte Lithosphere 83 pour gérer vos commandes, suivre leur statut et accéder à vos informations personnelles. Accès sécurisé pour une expérience personnalisée.",
};

export default function page() {
  return (
    <section className="logInSection">
      <article>
        <h1>Connexion</h1>
        <LogInForm />
        <Link href="/auth/forgetPassword">Mot de passe oublié?</Link>{" "}
        <Link href="/auth/signUp">Vous n'avez pas encore de compte ? </Link>
      </article>
    </section>
  );
}
