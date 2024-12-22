import React from "react";

// Import Link //
import Link from "next/link";

// Import categories //
import jewelCategories from "@/app/utils/ShopCategories/jewelCategories.json";
import otherCategories from "@/app/utils/ShopCategories/otherCategories.json";
import fossilCategories from "@/app/utils/ShopCategories/fossilCategories.json";
import stoneCategories from "@/app/utils/ShopCategories/stoneCategories.json";

// Import components //
import NavCategorie from "./NavCategorie";
import NavSearch from "./NavSearch";

export default function Nav() {
  return (
    <nav className="boutiqueNav">
      <NavSearch />
      <NavCategorie list={jewelCategories} title="Bijoux" />
      <NavCategorie list={fossilCategories} title="Fossiles" />
      <NavCategorie list={otherCategories} title="Autres" />
      <NavCategorie list={stoneCategories} title="Pierres et mineraux" />
    </nav>
  );
}
