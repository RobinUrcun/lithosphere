"use client";
import React, { useEffect, useState } from "react";

// Import Image //
import Image from "next/image";
import basketPicture from "@/public/icons/basket.svg";

// Import Link //
import Link from "next/link";

// Import Functions //
import { fetchCartProduct } from "@/app/utils/functions/cart/fetchCartProduct";

// Import Components //
import ProductCard from "./ProductCard";

export default function CartComponent({ isUserLog }) {
  const [isLoading, setIsLoading] = useState(true); //
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetchCartProduct()
      .then((data) => {
        setProductList(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <article>
        {isLoading || !productList?.length ? (
          <p className="emptyCart">
            <Image src={basketPicture} height={100} width={100} alt="" />
          </p>
        ) : (
          productList?.map((product, index) => (
            <ProductCard key={product._id + index} product={product} />
          ))
        )}
        {/* {productList ? (
          productList.map((product, index) => (
            <ProductCard key={product._id + index} product={product} />
          ))
        ) : (
          <p className="emptyCart">
            <Image src={basketPicture} height={100} width={100} alt="" />
          </p>
        )} */}
      </article>
      {isUserLog ? (
        <Link className="mainButton" href={"/ModeDeLivraison"}>
          Etape suivante
        </Link>
      ) : (
        <Link className="mainButton" href={"/auth/logIn"}>
          Se Connecter
        </Link>
      )}
    </React.Fragment>
  );
}
