import React from "react";

// Import Image //
import Image from "next/image";
import logo from "@/public/assets/logo.webp";

import Nav from "./nav/Nav";

export default async function Header() {
  return (
    <header>
      <Image
        className="headerLogo"
        src={logo}
        width={280}
        height={96}
        alt={"Lithosphere 83"}
        priority
      />
      <Nav />
    </header>
  );
}
