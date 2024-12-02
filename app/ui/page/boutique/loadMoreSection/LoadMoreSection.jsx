"use client";

import React, { useState, useEffect } from "react";

// Import Components //
import ProductCard from "../productCard/ProductCard";

// Import Functions  //
import { fetchData } from "@/app/utils/functions/fetchData";

export default function LoadMoreSection({ categorie }) {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(2);

  const loadMore = function () {
    fetchData(
      `https://mineraux83-api.vercel.app/api/product?page=${page}&sort=new&categorie=${categorie}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    )
      .then((data) => {
        console.log(data.stones);
        setProductList([...productList, ...data.stones]);
        setPage(page + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData(
      `https://mineraux83-api.vercel.app/api/product?page=${page}&sort=new&categorie=${categorie}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    ).then((data) => {
      setProductList([...productList, ...data.stones]);
      setPage(page + 1);
    });
  }, []);

  console.log(productList);

  return (
    <React.Fragment>
      {productList.map((stone, index) => (
        <ProductCard key={stone + index} product={stone} />
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
    </React.Fragment>
  );
}
