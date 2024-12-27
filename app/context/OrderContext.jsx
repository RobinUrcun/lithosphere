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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCartProduct(isUserLog)
      .then((data) => {
        if (data) {
          setProductList(data);
          setIsLoading(false);
        } else {
          setProductList([]);
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsUserLog(false);
        router.push("/auth/logIn");
        setIsLoading(false);
      });
  }, [isUserLog]);
  return (
    <OrderContext.Provider
      value={{
        productList: productList,
        setProductList: setProductList,
        isLoading: isLoading,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
