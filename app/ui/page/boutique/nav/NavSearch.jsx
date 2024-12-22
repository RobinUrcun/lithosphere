"use client";
import React, { useState } from "react";

// Import Router //
import { useRouter } from "next/navigation"; // Utilise le router de Next.js

// Import Image //
import Image from "next/image";
import arrow from "@/public/icons/arrow.svg";
import magnifyingGlass from "@/public/icons/magnifyingGlass.svg";

export default function NavSearch() {
  const router = useRouter();

  const [isCategorieOpen, setIsCategorieOpen] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    router.push(`/boutique/recherche/${e.target.search.value}`);
  };
  return (
    <div className="categorie">
      <div
        className="categorieTitle"
        onClick={() => {
          setIsCategorieOpen(!isCategorieOpen);
        }}
      >
        <p>Rechercher</p>
        <p className={isCategorieOpen ? "rotate" : ""}>
          <Image src={arrow} width={20} height={20} alt="arrow" />
        </p>
      </div>
      <div className={`categorieList ${isCategorieOpen ? "open" : ""}`}>
        <form
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <input id="search" type="search" placeholder="Rechercher" />
          <button>
            <Image
              src={magnifyingGlass}
              width={30}
              height={30}
              alt="rechercher"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
