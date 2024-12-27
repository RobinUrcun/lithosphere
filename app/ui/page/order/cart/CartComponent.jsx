"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Import Image //
import Image from "next/image";
import basketPicture from "@/public/icons/basket.svg";

// Import Link //
import Link from "next/link";

// Import Functions //
import { fetchCartProduct } from "@/app/utils/functions/cart/fetchCartProduct";

// Import Context //
import { AuthContext } from "@/app/context/AuthContext";

// Import Components //
import ProductCard from "./ProductCard";
import { OrderContext } from "@/app/context/OrderContext";
import Loader from "@/app/ui/components/loader/Loader";

export default function CartComponent() {
  const { isUserLog, setIsUserLog } = useContext(AuthContext);

  const { productList, setProductList, isLoading } = useContext(OrderContext);
  const totalCart = productList.reduce(
    (total, produit) => total + produit.price,
    0
  );
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <React.Fragment>
        {productList.length > 0
          ? productList.map((product, index) => (
              <ProductCard
                key={product._id + index}
                product={product}
                productList={productList}
                setProductList={setProductList}
                isUserLog={isUserLog}
                setIsUserLog={setIsUserLog}
              />
            ))
          : null}
        {!totalCart ? null : (
          <div className="totalRow">
            Total :{" "}
            {(totalCart / 100).toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 2,
            })}
          </div>
        )}
        {isUserLog ? (
          !productList.length ? (
            <Link className="mainButton" href={"/boutique"}>
              Boutique
            </Link>
          ) : (
            <Link className="mainButton" href={"/commande/livraison"}>
              Etape suivante
            </Link>
          )
        ) : (
          <Link className="mainButton" href={"/auth/logIn"}>
            Se Connecter
          </Link>
        )}
      </React.Fragment>
    );
  }
}
