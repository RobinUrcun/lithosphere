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

export default function CartComponent() {
  const router = useRouter();
  const { isUserLog, setIsUserLog } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true); //
  const [productList, setProductList] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    console.log("useeffect", isUserLog);

    setIsLoading(true);
    fetchCartProduct(isUserLog)
      .then((data) => {
        if (data) {
          setProductList(data);
        } else {
          setProductList([]);
        }
      })
      .catch(() => {
        setIsUserLog(false);
        router.push("/auth/logIn");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isUserLog]);

  useEffect(() => {
    setTotalCart(
      productList.reduce((total, produit) => total + produit.price, 0)
    );
  }, [productList]);
  return (
    <React.Fragment>
      {isLoading || !productList ? (
        <p className="emptyCart">
          <Image src={basketPicture} height={100} width={100} alt="" />
        </p>
      ) : productList.length ? (
        productList.map((product, index) => (
          <ProductCard
            key={product._id + index}
            product={product}
            productList={productList}
            setProductList={setProductList}
            isUserLog={isUserLog}
            setIsUserLog={setIsUserLog}
          />
        ))
      ) : (
        <p className="emptyCart">
          <Image src={basketPicture} height={100} width={100} alt="" />
        </p>
      )}
      <div className="totalRow">
        Total :{" "}
        {(totalCart / 100).toLocaleString("fr-FR", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 2,
        })}
      </div>
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
