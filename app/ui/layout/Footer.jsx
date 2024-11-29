import React from "react";

// Import Image //
import Image from "next/image";
import logo from "@/public/assets/logo.webp";

// Import Link //
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Image src={logo} width={280} height={96} alt={""} />
      <nav>
        <Link href={""}>Accueil</Link>
        <Link href={""}>Boutique</Link>
        <Link href={""}>A propos</Link>
        <Link href={""}>Nous contacter</Link>
      </nav>
    </footer>
  );
}
