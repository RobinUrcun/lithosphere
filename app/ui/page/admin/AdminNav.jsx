import React from "react";

// Import Components //
import LinkCard from "../../components/LinkCard/LinkCard";

export default function AdminNav() {
  return (
    <nav className="accountNav">
      <h1>Administration</h1>
      <LinkCard href={"/admin/modifier"} title={"Modifier mes pierres"} />
      <LinkCard href="/admin/creer" title={"Créer une pierre"} />
      <LinkCard href="/admin/ventes" title={"Mes ventes"} />
    </nav>
  );
}
