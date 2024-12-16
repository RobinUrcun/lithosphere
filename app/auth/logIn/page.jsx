import React from "react";

// Import Components //
import LogInForm from "@/app/ui/components/Form/logIn/LogInForm";

// Import Link //
import Link from "next/link";

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
