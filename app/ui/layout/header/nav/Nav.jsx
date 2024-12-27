import React from "react";
import Link from "next/link";

// Import Components //
import NavAccompt from "../../NavAccompt";

export default function Nav() {
  return (
    <div className="headerNav">
      <nav id="user-nav">
        <Link href={"/"}>Accueil</Link>
        <Link href={"/boutique"}>Boutique</Link>
        <Link href={"/about"}>A propos</Link>
        <Link href={"/contact"}>Nous contacter</Link>
      </nav>
      <NavAccompt />
    </div>
  );
}
