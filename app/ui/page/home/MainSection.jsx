import React from "react";

// Import Image //
import Image from "next/image";
import mainImage from "@/public/assets/homePagePicture.png";

// Import Link //
import Link from "next/link";

export default function MainSection() {
  return (
    <section className="mainSection">
      <article>
        <h1>Mineraux et fossiles du monde spécialiste du Var et de la Corse</h1>
        <p>
          Découvrez une sélection unique de minéraux et fossiles provenant des
          quatre coins du monde, avec une expertise particulière sur le Var et
          la Corse.
        </p>
        <Link className="mainButton" href={""}>
          Visiter la boutique
        </Link>
      </article>
      <aside>
        <Image src={mainImage} height={240} width={400} alt="" />
        <Image
          className="reflection"
          src={mainImage}
          height={240}
          width={400}
          alt=""
        />
      </aside>
    </section>
  );
}
