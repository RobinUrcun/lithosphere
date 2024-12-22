"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Import Functions //
import { fetchCartProduct } from "@/app/utils/functions/cart/fetchCartProduct";

// Import Context //
import { AuthContext } from "./AuthContext";

export const OrderContext = createContext({ userCart: [] });

export default function OrderProvider({ children }) {
  const router = useRouter();

  const { isUserLog, setIsUserLog } = useContext(AuthContext);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
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
      });
  }, [isUserLog]);
  return (
    <OrderContext.Provider
      value={{ productList: productList, setProductList: setProductList }}
    >
      {children}
    </OrderContext.Provider>
  );
}
