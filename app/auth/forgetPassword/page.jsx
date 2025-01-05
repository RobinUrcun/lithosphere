import React from "react";

// Import Components //
import ForgetPasswordForm from "@/app/ui/components/Form/forgetPassword/ForgetPasswordForm";

export const metadata = {
  title: "Mot de Passe Oublié - Récupérez votre Compte | Lithosphere 83",
  description:
    "Vous avez oublié votre mot de passe ? Entrez votre adresse e-mail pour recevoir un lien de réinitialisation sécurisé et accéder à votre compte Lithosphere 83.",
};

export default function page() {
  return (
    <section className="forgetPasswordSection">
      <h1>Mot de passe oublié?</h1>
      <ForgetPasswordForm />
    </section>
  );
}
