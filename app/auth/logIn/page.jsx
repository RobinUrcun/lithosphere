import React from "react";

// Import Components //
import LogInArticle from "@/app/ui/components/Form/logIn/LogInArticle";

// Import Link //
import Link from "next/link";

export default function page() {
  return (
    <section className="logInSection">
      <article>
        <h1>Connexion</h1>
        <LogInArticle />
        <Link href="/auth/forgetPassword">Mot de passe oublié?</Link>{" "}
        <Link href="/auth/signUp">Vous n'avez pas encore de compte ? </Link>
      </article>
    </section>
  );
}
