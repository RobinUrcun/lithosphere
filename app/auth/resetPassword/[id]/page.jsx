import React from "react";

// Import Components //
import ResetPasswordForm from "@/app/ui/components/Form/resetPassword/ResetPasswordForm";

export const metadata = {
  title:
    "Modification du Mot de Passe - Sécurisez votre Compte | Lithosphere 83",
  description:
    "Définissez un nouveau mot de passe pour sécuriser votre compte Lithosphere 83. Assurez-vous de choisir un mot de passe fort et mémorable.",
};

export default function page() {
  return (
    <section className="resetPasswordSection">
      <h1>Modifier son mot de passe</h1>
      <ResetPasswordForm />
    </section>
  );
}
