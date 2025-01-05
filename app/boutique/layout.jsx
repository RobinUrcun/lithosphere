import React from "react";

// Import Components //
import Nav from "../ui/page/boutique/nav/Nav";

export const metadata = {
  title: "Boutique Lithosphere 83 - Minéraux Bruts, Polis et Bijoux Artisanaux",
  description:
    "Explorez la boutique Lithosphere 83 : un large choix de minéraux bruts, polis et transformés en bijoux artisanaux uniques. Pierres naturelles du Var, de la Corse et du monde entier, travaillées avec soin dans notre atelier à Aups (Var). Trouvez le bijou ou la pierre qui vous correspond.",
};

export default function layout({ children }) {
  return (
    <section className="boutiqueSection">
      <Nav />
      {children}
    </section>
  );
}
