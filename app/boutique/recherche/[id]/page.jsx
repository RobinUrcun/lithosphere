"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Import Components //
import ProductCard from "@/app/ui/page/boutique/productCard/ProductCard";
import NoProductFind from "@/app/ui/page/boutique/productCard/noProductFInd/NoProductFind";

// Import Functions  //
import { fetchData } from "@/app/utils/functions/fetchData";

export default function page() {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);

  const params = useParams();
  const loadMore = function () {
    fetchData(
      `https://lithosphere-api.vercel.app/api/product?page=${page}&name=${params.id}&sort=new`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    )
      .then((data) => {
        setProductList([...productList, ...data.stones]);
        setPage(page + 1);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData(
      `https://lithosphere-api.vercel.app/api/product?page=${page}&name=${params.id}&sort=new`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    )
      .then((data) => {
        if (!data.total) {
          setIsLoading(false);
        } else {
          setProductList(data.stones);
          setPage(page + 1);
          setIsLoading(false);
        }
      })
      .catch((err) => {});
  }, []);

  return (
    <article className="boutiqueCategory">
      <h1>Recherche : {params.id}</h1>
      {isLoading ? (
        <p>loading ...</p>
      ) : !productList.length ? (
        <NoProductFind />
      ) : (
        <div className="productListWrapper">
          {productList.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
          <div className="loadMoreBar">
            <div
              onClick={() => {
                loadMore();
              }}
              className="loadMore"
            >
              Plus de produit
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
