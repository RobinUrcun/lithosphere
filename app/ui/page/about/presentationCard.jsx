import React from "react";

// Import Image //
import Image from "next/image";

export default function PresentationCard({
  title,
  description,
  imgUrl,
  imgHeight,
  imgWidth,
}) {
  return (
    <div className="presentationCard">
      <div className="presentationCardInfo">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Image src={imgUrl} height={imgHeight} width={imgWidth} alt={title} />
    </div>
  );
}
