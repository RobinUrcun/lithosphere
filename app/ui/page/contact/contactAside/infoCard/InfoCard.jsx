import React from "react";

// Import Image //
import Image from "next/image";

export default function InfoCard({ href, imgUrl, content, title }) {
  return (
    <a href={href} className="infoCard">
      <Image src={imgUrl} height={100} width={100} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
    </a>
  );
}
