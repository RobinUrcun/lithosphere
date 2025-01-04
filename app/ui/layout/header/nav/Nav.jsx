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
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href={"/"}
          >
            Accueil
          </Link>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href={"/boutique"}
          >
            Boutique
          </Link>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href={"/about"}
          >
            A propos
          </Link>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            href={"/contact"}
          >
            Nous contacter
          </Link>
        </nav>
        <NavAccompt isOpen={isOpen} setIsOpen={setIsOpen} />
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
