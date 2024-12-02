import React from "react";

// Import Image //

import braceletPicture from "@/public/assets/collections/jewelPicture.jpg";
import pendantPicture from "@/public/assets/collections/pendantPicture.jpg";

// Import Components //
import ItemCard from "@/app/ui/components/ItemCard";

export default function JewelCollection() {
  return (
    <React.Fragment>
      <h2>Nos Bijoux</h2>
      <div className="collections">
        <ItemCard title="Bracelets" imgUrl={braceletPicture} size={500} />
        <ItemCard title="Pendentifs" imgUrl={pendantPicture} size={500} />
      </div>
    </React.Fragment>
  );
}
