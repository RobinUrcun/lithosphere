import React from "react";

// Import Components //
import ContactForm from "../ui/page/contact/contactForm/ContactForm";
import ContactAside from "../ui/page/contact/contactAside/ContactAside";

export const metadata = {
  title: "Contactez-nous - Lithosphere 83",
  description:
    "Vous avez une question ou une demande ? Contactez Lithosphere 83 ! Nous sommes à votre écoute pour toute information sur nos minéraux, bijoux ou services.",
};

export default function page() {
  return (
    <section className="contactSection">
      <article className="contactArticle">
        <ContactForm />
        <ContactAside />
      </article>
    </section>
  );
}
