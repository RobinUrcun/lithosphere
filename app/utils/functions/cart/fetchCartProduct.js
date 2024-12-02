import { fetchData } from "../fetchData";

export const fetchCartProduct = async function () {
  const isUserConnected = localStorage.getItem("userToken");
  if (!isUserConnected) {
    const productsId = JSON.parse(localStorage.getItem("cart"));

    if (productsId) {
      console.log(productsId.join(","));

      const response = await fetchData(
        `https://mineraux83-api.vercel.app/api/product/${productsId.join(",")}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );
      return response;
    }
  }
};
