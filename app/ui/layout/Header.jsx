import Link from "next/link";
import React from "react";

// Import Image //
import Image from "next/image";
import logo from "@/public/assets/logo.webp";
import basketIcon from "@/public/icons/basket.webp";
import accountIcon from "@/public/icons/account.svg";

export default function Header() {
  return (
    <header>
      <Image
        className="headerLogo"
        src={logo}
        width={350}
        height={120}
        alt={""}
        priority
      />
      <nav id="user-nav">
        <Link href={""}>Accueil</Link>
        <Link href={""}>Boutique</Link>
        <Link href={""}>A propos</Link>
        <Link href={""}>Nous contacter</Link>
      </nav>
      <nav id="accompte-nav">
        <Link href={""}>
          <Image src={basketIcon} alt="" width={35} height={35} />
        </Link>
        <Link href={""}>
          <Image src={accountIcon} alt="" width={35} height={35} />
        </Link>
      </nav>
    </header>
  );
}
