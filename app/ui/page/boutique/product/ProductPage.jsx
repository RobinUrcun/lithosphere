import React from "react";

// Import Functions //
import { capitalizeFirstLetter } from "@/app/utils/functions/capitalizeFirstLetter";

// Import Components //
import Carousel from "./carousel/Carousel";
import AddToCart from "./addToCart/AddToCart";

export default function ProductPage({ product }) {
  return (
    <article className="productPage">
      <div className="productCarousel">
        <Carousel mainFile={product.mainFile} file={product.file} />
      </div>
      <div className="productInfo">
        <h1>{product.title}</h1>
        <p className="productDescription">
          {capitalizeFirstLetter(product.description)}.
        </p>
        <p className="productOrigin">
          <span>Provenance :</span> {product.origin}
        </p>
        <div className="productDetail">
          <div className="productPrice">
            <p>Prix</p>
            <p>
              {(product.price / 100).toLocaleString("fr-FR", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="productWeight">
            <p>Poids</p>
            <p>{product.weight} g</p>
          </div>
          <div className="productSize">
            <p>Taille</p>
            <p>{product.size.toLowerCase()}</p>
          </div>
        </div>
        <AddToCart productId={product._id} />
      </div>
    </article>
  );
}
