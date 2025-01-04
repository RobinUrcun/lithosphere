import React from "react";

// Import Components //
import ForgetPasswordForm from "@/app/ui/components/Form/forgetPassword/ForgetPasswordForm";

export default function page() {
  return (
    <section className="forgetPasswordSection">
      <h1>Mot de passe oublié?</h1>
      <ForgetPasswordForm />
    </section>
  );
}
