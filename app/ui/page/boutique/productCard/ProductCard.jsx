import React from "react";

// Import Link //
import Link from "next/link";

// Import Components //
import AddToCart from "./AddToCart/AddToCart";

export default function ProductCard({ product }) {
  return (
    <div className="productCardContainer">
      <Link
        className="imgWrapper"
        href={`/boutique/${product.categories[0]}/${product._id}`}
      >
        <img
          src={`https://lithosphere83-bucket.s3.eu-west-3.amazonaws.com/upload/${product.mainFile[0]}`}
          alt={`Visitez ${product.title}`}
        />
      </Link>
      <div className="productCardInfo">
        <div className="productCardName">
          <h2>{product.title}</h2>
          <p className="price">
            {(product.price / 100).toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
        <AddToCart productId={product._id} />
      </div>
    </div>
  );
}
