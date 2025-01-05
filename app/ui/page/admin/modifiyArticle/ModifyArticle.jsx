"use client";

import React, { useState, useEffect } from "react";

// Import Components //
import ProductCard from "@/app/ui/page/admin/modifiyArticle/productCard/ProductCard";
import NoProductFind from "@/app/ui/page/boutique/productCard/noProductFInd/NoProductFind";
import Loader from "@/app/ui/components/loader/Loader";

// Import Functions  //
import { fetchData } from "@/app/utils/functions/fetchData";

// Import Toast //
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ModifyArticle() {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);

  const loadMore = function () {
    fetchData(
      `https://lithosphere-api.vercel.app/api/product?page=${page}&sort=new`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
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
      `https://lithosphere-api.vercel.app/api/product?page=${page}&sort=new`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
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
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="modifyWrapper">
      {isLoading ? (
        <Loader />
      ) : !productList.length ? (
        <NoProductFind />
      ) : (
        <div className="productListWrapper">
          {productList.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              productList={productList}
              setProductList={setProductList}
            />
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
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </div>
      )}
    </div>
  );
}
