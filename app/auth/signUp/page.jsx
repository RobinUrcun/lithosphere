import React from "react";

// Import Link //
import Link from "next/link";

// Import Components //
import SignUpForm from "@/app/ui/components/Form/signUp/SignUpForm";

export const metadata = {
  title: "Inscription - Rejoignez Lithosphere 83 et Gérez vos Commandes",
  description:
    "Créez votre compte Lithosphere 83 pour suivre vos commandes, accéder à vos informations personnelles et profiter d’une expérience client personnalisée. Inscription rapide et sécurisée.",
};

export default function page() {
  return (
    <section className="signUpSection">
      <article>
        <h1>Inscription</h1>
        <SignUpForm />
        <Link href="/auth/logIn">Vous avez déjà un compte ? </Link>
      </article>
    </section>
  );
}
