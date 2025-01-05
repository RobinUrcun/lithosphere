import React from "react";

// Import Image //

import ammonitePicture from "@/public/assets/collections/ammonitePicture.webp";
import boisFossilPicture from "@/public/assets/collections/boisFossilPicture.webp";
import shellfishPicture from "@/public/assets/collections/shellfishPicture.webp";

// Import Components //
import ItemCard from "@/app/ui/components/ItemCard";

export default function FossilCollection() {
  return (
    <React.Fragment>
      <h2>Nos Fossiles</h2>
      <div className="collections">
        <ItemCard title="Ammonites" imgUrl={ammonitePicture} size={500} />
        <ItemCard title="Bois Fossile" imgUrl={boisFossilPicture} size={500} />
        <ItemCard title="Coquillages" imgUrl={shellfishPicture} size={500} />
      </div>
    </React.Fragment>
  );
}
