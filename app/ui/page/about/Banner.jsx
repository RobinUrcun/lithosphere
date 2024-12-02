import React from "react";

// Import Image //
import Image from "next/image";
import bannerPicture from "@/public/assets/aboutPagePicture.webp";

export default function Banner() {
  return (
    <div className="aboutBanner">
      <div className="title">
        <h1>Bienvenue chez Lithosphere 83</h1>
      </div>
      <div className="imgWrapper">
        <Image src={bannerPicture} width={1300} height={700} alt="banniere" />
      </div>
    </div>
  );
}
