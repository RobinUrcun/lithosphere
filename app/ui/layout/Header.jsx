import Link from "next/link";
import React from "react";

// Import Image //
import Image from "next/image";
import logo from "@/public/assets/logo.webp";

// Import Components //
import NavAccompt from "./NavAccompt";

export default async function Header() {
  return (
    <header>
      <Image
        className="headerLogo"
        src={logo}
        width={280}
        height={96}
        alt={""}
        priority
      />
      <nav id="user-nav">
        <Link href={"/"}>Accueil</Link>
        <Link href={"/boutique"}>Boutique</Link>
        <Link href={"/about"}>A propos</Link>
        <Link href={"/contact"}>Nous contacter</Link>
      </nav>
      <NavAccompt />
    </header>
  );
}
