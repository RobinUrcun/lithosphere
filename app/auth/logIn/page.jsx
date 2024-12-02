import React from "react";

// Import Components //
import LogInArticle from "@/app/ui/components/Form/logIn/LogInArticle";

export default function page() {
  return (
    <section className="logInSection">
      <article>
        <h1>Connexion</h1>
        <LogInArticle />
      </article>
    </section>
  );
}
