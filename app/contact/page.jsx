import React from "react";

// Import Components //
import ContactForm from "../ui/page/contact/contactForm/ContactForm";
import ContactAside from "../ui/page/contact/contactAside/ContactAside";

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
