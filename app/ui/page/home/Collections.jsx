import React from "react";

// Import Link //
import Link from "next/link";

// Import Components //
import ItemCard from "../../components/ItemCard";

// Import collection Image //
import amethystePicture from "@/public/assets/collections/amethystePicture.webp";
import jewelPicture from "@/public/assets/collections/jewelPicture.webp";
import CreasyLacePicture from "@/public/assets/collections/creasyLacePicture.webp";

export default function Collections() {
  return (
    <section className="collectionSection">
      <h2>Explorez nos Univers</h2>
      <article>
        <ItemCard size={300} title="Amethyste" imgUrl={amethystePicture} />
        <ItemCard size={300} title="Bracelets" imgUrl={jewelPicture} />
        <ItemCard size={300} title="Creasy Lace" imgUrl={CreasyLacePicture} />
      </article>
      <Link className="mainButton" href={"/boutique"}>
        Toute la boutique
      </Link>
    </section>
  );
}
