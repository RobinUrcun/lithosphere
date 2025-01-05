import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Email Envoyé - Vérifiez votre Boîte de Réception | Lithosphere 83",
  description:
    "Un lien de réinitialisation de mot de passe a été envoyé à votre adresse e-mail. Vérifiez votre boîte de réception et suivez les instructions pour accéder à votre compte Lithosphere 83.",
};

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
