import React from "react";

// Import Components //
import Banner from "../ui/page/boutique/banner/Banner";
import StoneCollection from "../ui/page/boutique/collections/StoneCollection";
import JewelCollection from "../ui/page/boutique/collections/JewelCollection";
import FossilCollection from "../ui/page/boutique/collections/FossilCollection";

export default function page() {
  return (
    <article className="mainArticle">
      <Banner />
      <StoneCollection />
      <JewelCollection />
      <FossilCollection />
    </article>
  );
}
