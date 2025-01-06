import React from "react";

// Import Image //
import Image from "next/image";
import logo from "@/public/assets/logo.webp";

// Import Link //
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Image
        className="footerLogo"
        src={logo}
        width={280}
        height={96}
        alt={"Lithosphere 83"}
      />
      <nav>
        <Link href={"/"}>Accueil</Link>
        <Link href={"/boutique"}>Boutique</Link>
        <Link href={"/about"}>A propos</Link>
        <Link href={"/contact"}>Nous contacter</Link>
      </nav>
    </footer>
  );
}
