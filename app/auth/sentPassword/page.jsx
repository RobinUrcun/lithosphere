import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="sentPasswordSection">
      <h1>Email envoyé avec succès!</h1>
      <p>
        Un email de réinitialisation de mot de passe a été envoyé à votre
        adresse email. Veuillez vérifier votre boîte de réception et suivre les
        instructions pour réinitialiser votre mot de passe.
      </p>
      <p>
        Si vous ne recevez pas l'email dans quelques minutes, veuillez vérifier
        votre dossier de spam ou{" "}
        <Link href={"/auth/forgetPassword"}>réessayer</Link>.
      </p>
    </section>
  );
}
