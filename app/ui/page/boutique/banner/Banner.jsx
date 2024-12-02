import React from "react";

// Import Image //
import Image from "next/image";
import bannerImage from "@/public/assets/boutique/banner.webp";

export default function Banner() {
  return (
    <div className="boutiqueBanner">
      <h1>Notre Boutique</h1>
      <div className="imgWrapper">
        <Image src={bannerImage} width={1000} height={750} alt="" />
      </div>
    </div>
  );
}
