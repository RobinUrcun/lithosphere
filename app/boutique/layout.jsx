import React from "react";

// Import Components //
import Nav from "../ui/page/boutique/nav/Nav";

export default function layout({ children }) {
  return (
    <section className="boutiqueSection">
      <Nav />
      {children}
    </section>
  );
}
