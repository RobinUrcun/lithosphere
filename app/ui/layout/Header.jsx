import Link from "next/link";
import React from "react";

// Import Cookies //
import { cookies } from "next/headers";

// Import Image //
import Image from "next/image";
import logo from "@/public/assets/logo.webp";
import basketIcon from "@/public/icons/basket.webp";
import accountIcon from "@/public/icons/account.svg";

export default async function Header() {
  const cookieStore = await cookies();
  const isUserLog = cookieStore.get("userToken") ? true : false;
  console.log(isUserLog);

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
      <nav id="accompte-nav">
        <Link href={"/panier"}>
          <Image src={basketIcon} alt="" width={35} height={35} />
        </Link>
        <Link href={isUserLog ? "/monOmpotre" : "/auth/logIn"}>
          <Image src={accountIcon} alt="" width={35} height={35} />
        </Link>
      </nav>
    </header>
  );
}
