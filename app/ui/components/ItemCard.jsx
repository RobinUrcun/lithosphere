import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ItemCard({ title, imgUrl, size }) {
  return (
    <div className="itemCardContainer">
      <Link href={`/boutique/${title}`}>
        <Image
          src={imgUrl}
          height={size}
          width={size}
          alt={`Visitez ${title}`}
        />
      </Link>
      <h3>{title}</h3>
    </div>
  );
}
