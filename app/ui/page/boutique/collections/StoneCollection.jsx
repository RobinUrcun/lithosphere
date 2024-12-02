import React from "react";

// Import Image //
import bauxitePicture from "@/public/assets/collections/bauxitePicture.webp";
import calcedoinePicture from "@/public/assets/collections/calcedoinePicture.webp";
import pyritePicture from "@/public/assets/collections/pyritePicture.webp";
import turquoisePicture from "@/public/assets/collections/turquoisePicture.webp";

// Import Components //
import ItemCard from "@/app/ui/components/ItemCard";

export default function StoneCollection() {
  return (
    <React.Fragment>
      <h2>Nos Pierres et Mineraux</h2>
      <div className="collections">
        <ItemCard title="Bauxite" imgUrl={bauxitePicture} size={200} />
        <ItemCard title="Calcedoine" imgUrl={calcedoinePicture} size={200} />
        <ItemCard title="Pyrite" imgUrl={pyritePicture} size={200} />
        <ItemCard title="Turquoise" imgUrl={turquoisePicture} size={200} />
      </div>
    </React.Fragment>
  );
}
