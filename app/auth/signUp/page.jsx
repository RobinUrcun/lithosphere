import React from "react";

// Import Link //
import Link from "next/link";

// Import Components //
import SignUpForm from "@/app/ui/components/Form/signUp/SignUpForm";

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
