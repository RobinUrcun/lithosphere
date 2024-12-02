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

export function addToCart(productId) {
  const isUserConnected = localStorage.getItem("userToken");
  if (!isUserConnected) {
    let lsPanier = !localStorage.getItem("cart")
      ? []
      : JSON.parse(localStorage.getItem("cart"));
    lsPanier.includes(productId) ? null : lsPanier.push(productId);
    const panierJSON = JSON.stringify(lsPanier);
    localStorage.setItem("cart", panierJSON);
  }
  console.log(localStorage.getItem("cart"));
}
