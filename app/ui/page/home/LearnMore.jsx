import React from "react";

// Import Link //
import Link from "next/link";

// Import Image //
import Image from "next/image";
import learnMorePicture from "@/public/assets/learnMorePicture.webp";

export default function LearnMore() {
  return (
    <section className="learnMoreSection">
      <article>
        <h2>Qui sommes-nous?</h2>
        <p>
          Fort de mon expérience en tant que prospecteur et lapidaire
          spécialisé, je mets à votre disposition une expertise unique dans le
          monde des minéraux. Mon objectif est de vous offrir un accès
          privilégié aux trésors cachés du Var et de la Corse, en vous proposant
          une sélection exclusive de spécimens rares et authentiques.
        </p>
        <Link className="mainButton" href={"/about"}>
          En savoir plus
        </Link>
      </article>
      <aside>
        <Image
          src={learnMorePicture}
          height={500}
          width={600}
          alt="Un produit proposé à la vente"
        />
      </aside>
    </section>
  );
}
