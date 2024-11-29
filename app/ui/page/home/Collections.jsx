import React from "react";

// Import Link //
import Link from "next/link";

// Import Components //
import ItemCard from "../../components/ItemCard";

// Import collection List //
import collectionsList from "@/app/utils/collectionList.json";

export default function Collections() {
  return (
    <section className="collectionSection">
      <h2>Explorez nos Univers</h2>
      <article>
        {collectionsList.map((collection, index) => (
          <ItemCard
            key={`${collection} + ${index}`}
            title={collection.title}
            imgUrl={collection.imgUrl}
            url={collection.url}
          />
        ))}
      </article>
      <Link className="mainButton" href={""}>
        Toute la boutique
      </Link>
    </section>
  );
}
