import React from "react";

// Import Functions //
import { fetchData } from "@/app/utils/functions/fetchData";

// Import Components //
import ProductPage from "@/app/ui/page/boutique/product/ProductPage";
import { notFound } from "next/navigation";

export default async function page({ params }) {
  const { id } = await params;
  const response = await fetchData(
    `https://mineraux83-api.vercel.app/api/product/${id}`,
    { method: "GET", headers: { "Content-Type": "application/json" } }
  );
  if (!response) {
    notFound();
  }

  const product = await response[0];

  return <ProductPage product={product} />;
}
