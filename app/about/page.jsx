import React from "react";

// Import Components //
import Banner from "../ui/page/about/Banner";
import PresentationCard from "../ui/page/about/presentationCard";

// Import Image //
import standPicture from "@/public/assets/boutique/banner.webp";
import articlePicture from "@/public/assets/about/articlePicture.webp";
import shedPicture from "@/public/assets/about/shedPicture.webp";

export default function page() {
  return (
    <section className="aboutSection">
      <Banner />
      <article className="aboutArticle">
        <PresentationCard
          title="Notre Histoire"
          description="Depuis l’enfance, une passion pour les minéraux nous anime. De la découverte des trésors naturels du Var et de la Corse à la maîtrise de l’art lapidaire, notre parcours est guidé par la fascination pour la beauté de la Terre. 
          Au fil des années, nous avons perfectionné notre savoir-faire pour révéler l’éclat unique de chaque pierre. Lithosphère 83, c’est avant tout une histoire de passion et d’expertise, dédiée à partager des pièces authentiques et exceptionnelles avec les amoureux de minéraux."
          imgUrl={standPicture}
          imgHeight={375}
          imgWidth={500}
        />
        <PresentationCard
          title="Ce que Nous Proposons"
          description="Découvrez une sélection unique de minéraux et fossiles : des quartz scintillants, des améthystes captivantes, ou encore des agates aux reflets hypnotiques. Nos spécimens proviennent principalement du Var, de la Corse, et d'autres régions du monde, et sont choisis pour leur qualité et leur authenticité.
          Que vous soyez collectionneur, curieux ou amateur de beauté naturelle, nous vous proposons des pièces qui racontent une histoire et mettent en lumière les merveilles de notre planète. Avec Lithosphère 83, chaque découverte est une invitation à explorer la richesse du monde minéral."
          imgUrl={articlePicture}
          imgHeight={400}
          imgWidth={375}
        />
        <PresentationCard
          title="Rejoignez-Nous"
          description="Participez à l’aventure Lithosphère 83 et plongez dans l’univers fascinant des minéraux. Suivez nos actualités, explorez nos nouveautés et bénéficiez de conseils personnalisés pour enrichir votre collection.
          Pour toute question ou demande spécifique, contactez-nous. Nous sommes à vos côtés pour vous guider et partager notre passion. Rejoignez une communauté qui célèbre la magie de la Terre à travers ses trésors naturels."
          imgUrl={shedPicture}
          imgHeight={375}
          imgWidth={500}
        />
      </article>
    </section>
  );
}
