// export function addToCart(article, userInfo) {
//   if (userInfo.isUserConnected == true) {
//     fetch("https://mineraux83-api.vercel.app/api/user/cart/", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("userInfoToken")}`,
//       },
//       body: JSON.stringify({
//         articleId: article,
//       }),
//     });
//   } else {
//     let lsPanier = !localStorage.getItem("panier")
//       ? []
//       : JSON.parse(localStorage.getItem("panier"));
//     lsPanier.includes(article) ? null : lsPanier.push(article);
//     const panierJSON = JSON.stringify(lsPanier);
//     localStorage.setItem("panier", panierJSON);
//   }
// }

export async function addToCart(isUserLog, productId) {
  if (!isUserLog) {
    let lsPanier = !localStorage.getItem("cart")
      ? []
      : JSON.parse(localStorage.getItem("cart"));
    lsPanier.includes(productId) ? null : lsPanier.push(productId);
    const panierJSON = JSON.stringify(lsPanier);
    localStorage.setItem("cart", panierJSON);
  } else {
    try {
      const response = await fetch("http://localhost:3000/api/user/cart/", {
        method: "PUT",
        credentials: "include",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          articleId: productId,
        }),
      });
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
