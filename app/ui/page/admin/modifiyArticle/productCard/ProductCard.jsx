import React from "react";

// Import Link //
import Link from "next/link";

// Import Toast //
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductCard({ product, productList, setProductList }) {
  const deleteProduct = function () {
    fetch(`http://localhost:3000/api/product/singleProduct/${product._id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => {

        if (response.status === 200) {
          const filterProducts = productList.filter((singleProduct) => {
            return singleProduct._id !== product._id;
          });
          toast.success("Produit supprimé");

          setProductList(filterProducts);
        } else {
          toast.error("Erreur");
        }
      })
      .catch(() => {
        toast.error("Erreur");
      });
  };
  return (
    <div className="productCardContainer">
      <Link className="imgWrapper" href={`/admin/modifier/${product._id}`}>
        <img
          src={`https://lithosphere83-bucket.s3.eu-west-3.amazonaws.com/upload/${product.mainFile[0]}`}
          alt={`Visitez ${product.title}`}
        />
      </Link>
      <div className="productCardInfo">
        <div className="productCardName">
          <h2>{product.title}</h2>
          <p className="price">
            {(product.price / 100).toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 2,
            })}
          </p>
          <div className="modifyWrapper">
            <Link
              className="modifyButton"
              href={`/admin/modifier/${product._id}`}
            >
              Modifier
            </Link>
            <p
              onClick={() => {
                deleteProduct();
              }}
              className="deleteButton"
            >
              Supprimer
            </p>
            <Link className="modifyButton" href={`/admin/creer/${product._id}`}>
              Produit similaire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
