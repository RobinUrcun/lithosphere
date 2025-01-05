import React from "react";

// Import Image //
import Image from "next/image";
import warning from "@/public/icons/warning.webp";

export default function NoProductFind() {
  return (
    <div className="noProductFind">
      <h2>Aucuns produits</h2>
      <p>
        Désolé, mais nous n'avons trouvé aucun produits correspondant à votre
        recherche
      </p>
      <Image src={warning} height={200} width={200} alt="Erreur" />
    </div>
  );
}
