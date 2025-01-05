import { fetchData } from "../fetchData";

export const fetchCartProduct = async function (isUserLog) {
  if (!isUserLog) {
    const productsId = JSON.parse(localStorage.getItem("cart"));

    if (productsId) {
      try {
        const response = await fetchData(
          `https://lithosphere-api.vercel.app/api/product/${productsId.join(
            ","
          )}`,
          { method: "GET", headers: { "Content-Type": "application/json" } }
        );
        return response;
      } catch (error) {
        throw new Error();
      }
    } else {
      return [];
    }
  } else {
    try {
      const response = await fetchData(
        "https://lithosphere-api.vercel.app/api/user/cart",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      return response;
    } catch (error) {
      throw new Error();
    }
  }
};
