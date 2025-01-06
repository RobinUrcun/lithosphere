import React from "react";
import { notFound } from "next/navigation";

// Import Functions
import { fetchData } from "@/app/utils/functions/fetchData";

// Import Components
import ProductPage from "@/app/ui/page/boutique/product/ProductPage";
import NoProductFind from "@/app/ui/page/boutique/productCard/noProductFInd/NoProductFind";

export default async function page({ params }) {
  const { id } = await params;

  try {
    const data = await fetchData(
      `https://api.lithosphere83.fr/api/product/${id}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );

    if (!data || data.length === 0) {
      notFound();
    }

    return <ProductPage product={data[0]} />;
  } catch (error) {
    return <NoProductFind />;
  }
}
