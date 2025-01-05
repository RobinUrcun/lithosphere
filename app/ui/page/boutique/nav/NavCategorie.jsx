"use client";

import React, { useState } from "react";

// Import Link //
import Link from "next/link";

// Import Image //
import Image from "next/image";
import arrow from "@/public/icons/arrow.svg";

export default function NavCategorie({ list, title }) {
  const [isCategorieOpen, setIsCategorieOpen] = useState(false);
  return (
    <div className="categorie">
      <div
        className="categorieTitle"
        onClick={() => {
          setIsCategorieOpen(!isCategorieOpen);
        }}
      >
        <p>{title}</p>
        <p className={isCategorieOpen ? "rotate" : ""}>
          <Image src={arrow} width={20} height={20} alt="Flèche" />
        </p>
      </div>
      <div className={`categorieList ${isCategorieOpen ? "open" : ""}`}>
        {list.map((categorie, index) => (
          <Link key={categorie + index} href={`/boutique/${categorie.value}`}>
            <p>{categorie.value}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
