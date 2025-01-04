import React from "react";

// Import Components //
import ResetPasswordForm from "@/app/ui/components/Form/resetPassword/ResetPasswordForm";

export default function page() {
  return (
    <section className="resetPasswordSection">
      <h1>Modifier son mot de passe</h1>
      <ResetPasswordForm />
    </section>
  );
}
