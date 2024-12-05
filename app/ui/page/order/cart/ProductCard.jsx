import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Remove from Cart Function //
import { removeFromCart } from "@/app/utils/functions/cart/removeFromCart";

export default function ProductCard({
  product,
  productList,
  setProductList,
  isUserLog,
  setIsUserLog,
}) {
  console.log(product);

  const router = useRouter();
  return (
    <div className="cartWrapper">
      <div className="cartProductImgWrapper">
        <img
          src={`https://lithosphere83-bucket.s3.eu-west-3.amazonaws.com/upload/${product.mainFile[0]}`}
          alt="Votre produit"
        />
      </div>
      <div className="cartResponsiveWrapper">
        <Link href={`/boutique/${product.categories[0]}/${product._id}`}>
          <h2>{product.title}</h2>
        </Link>

        <div className="cartQty">
          <form className="cartQtyWrapper">
            <label htmlFor="quantity">Quantité :</label>
            <select id="quantity">
              <option value="1">1</option>
            </select>
          </form>
          <div
            onClick={() => {
              removeFromCart(isUserLog, product._id)
                .then(() => {
                  setProductList(
                    productList.filter((produit) => produit._id !== product._id)
                  );
                })
                .catch((err) => {
                  setIsUserLog(false);
                  router.push("/auth/logIn");
                });
            }}
            className="removeItem"
          >
            Supprimer
          </div>
        </div>
      </div>
      <div className="cartPrice">
        {(product.price / 100).toLocaleString("fr-FR", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 2,
        })}
      </div>
    </div>
  );
}
