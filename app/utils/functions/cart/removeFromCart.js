// export function removeFromCart(productId, userInfo) {
//   if (userInfo.isUserConnected) {
//     fetch("https://api.lithosphere83.fr/api/user/cart/", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("userInfoToken")}`,
//       },
//       body: JSON.stringify({
//         articleId: productId,
//       }),
//     });
//   } else {
//     const lsPanier = JSON.parse(localStorage.getItem("panier"));
//     const newLsPanier = JSON.parse(localStorage.getItem("panier")).filter(
//       (product) => product != productId
//     );
//     localStorage.setItem("panier", JSON.stringify(newLsPanier));
//   }
// }
export async function removeFromCart(isUserLog, productId) {
  if (!isUserLog) {
    const newLsPanier = JSON.parse(localStorage.getItem("cart")).filter(
      (product) => product != productId
    );
    localStorage.setItem("cart", JSON.stringify(newLsPanier));
  } else {
    try {
      const response = await fetch(
        "https://api.lithosphere83.fr/api/user/cart/",
        {
          method: "DELETE",
          credentials: "include",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            articleId: productId,
          }),
        }
      );
      if (response.ok) {
        return "succes";
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new Error();
    }
  }
}
