import React from "react";

// Import Shop Categories
import shopCategories from "@/app/utils/ShopCategories/shopCategories.json";

//Import NotFound //
import { notFound } from "next/navigation";

// Import Components //
import ProductCard from "@/app/ui/page/boutique/productCard/ProductCard";
import LoadMoreSection from "@/app/ui/page/boutique/loadMoreSection/LoadMoreSection";

export async function generateStaticParams() {
  return shopCategories.map((category) => ({
    categorie: category.value,
  }));
}

export default async function BoutiqueCategory({ params }) {
  const { categorie: encodedCategorie } = await params;
  const categorie = decodeURIComponent(encodedCategorie);

  const categoryExists = shopCategories.some(
    (category) => category.value.toLowerCase() === categorie.toLowerCase()
  );

  if (!categoryExists) {
    notFound();
  }
  let product = [];
  try {
    const response = await fetch(
      `https://mineraux83-api.vercel.app/api/product?page=1&sort=new&categorie=${categorie}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
    if (!response) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    product = data.stones || [];
  } catch (error) {
    product = [];
  }

  return (
    <article className="boutiqueCategory">
      <h1>Nos {categorie}</h1>
      <div className="productListWrapper">
        {product.length > 0 ? (
          <React.Fragment>
            {product.map((stone, index) => (
              <ProductCard key={stone + index} product={stone} />
            ))}
            <LoadMoreSection categorie={categorie} />
          </React.Fragment>
        ) : (
          <p>Aucun produit trouvé ...</p>
        )}
      </div>
    </article>
  );
}
