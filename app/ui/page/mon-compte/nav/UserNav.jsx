import React from "react";

// Import Components //
import LinkCard from "../../../components/LinkCard/LinkCard";

export default function UserNav() {
  return (
    <nav className="accountNav">
      <h1>Mon compte</h1>

      <LinkCard href={"/mon-compte/informations"} title={"Mes informations"} />
      <LinkCard href="/mon-compte/commandes" title={"Mes commandes"} />
    </nav>
  );
}
