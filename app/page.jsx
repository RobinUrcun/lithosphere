import React from "react";

// Import components //
import MainSection from "./ui/page/home/MainSection";
import Collections from "./ui/page/home/Collections";
import LearnMore from "./ui/page/home/LearnMore";

export const metadata = {
  title: "Lithosphere 83 - Vente de Minéraux Bruts, Polis et Bijoux Artisanaux",
  description:
    "Découvrez Lithosphere 83, votre boutique en ligne dédiée aux minéraux du monde entier. Artisan basé à Aups (Var), nous proposons des minéraux bruts, polis et transformés en bijoux uniques, tels que pendentifs et bracelets. Nos pierres proviennent du Var, de la Corse et de nos voyages à travers le globe.",
};

export default function Home() {
  return (
    <React.Fragment>
      <MainSection />
      <Collections />
      <LearnMore />
    </React.Fragment>
  );
}
