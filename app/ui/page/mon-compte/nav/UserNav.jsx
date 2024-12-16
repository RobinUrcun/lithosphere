import React from "react";

// Import Components //
import LinkCard from "../../../components/LinkCard/LinkCard";

export default function UserNav() {
  return (
    <nav>
      <LinkCard href={"/mon-compte/informations"} title={"Mes informations"} />
      <LinkCard href="/mon-compte/achat" title={"Mes achats"} />
    </nav>
  );
}
