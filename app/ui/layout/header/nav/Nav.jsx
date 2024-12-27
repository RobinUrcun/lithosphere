"use client";

import React, { useState } from "react";
import Link from "next/link";

// Import Components //
import NavAccompt from "../../NavAccompt";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <div className={`headerNav ${isOpen ? "isOpen" : ""}`}>
        <nav id="user-nav">
          <Link href={"/"}>Accueil</Link>
          <Link href={"/boutique"}>Boutique</Link>
          <Link href={"/about"}>A propos</Link>
          <Link href={"/contact"}>Nous contacter</Link>
        </nav>
        <NavAccompt />
        <div
          className="closeBtnMenu"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="mobileBtnMenu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </React.Fragment>
  );
}
