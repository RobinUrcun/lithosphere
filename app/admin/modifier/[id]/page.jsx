"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Select  Librairy //
const Select = dynamic(() => import("react-select"), { ssr: false });
import options from "@/app/utils/ShopCategories/shopCategories.json";
import { selectStyles } from "@/app/ui/components/Select/selectStyles";
// Import Functions  //
import { fetchData } from "@/app/utils/functions/fetchData";
import { useParams, useRouter } from "next/navigation";

// Import Components //
import ImgCard from "@/app/ui/page/admin/modifiyArticle/productCard/imgCard/ImgCard";

// Import Toast //
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const router = useRouter();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    size: "",
    weight: "",
    origin: "",
    reference: "",
    categories: "",
    mainFile: [],
    file: [],
  });
  console.log(product);

  const submitForm = function (e) {
    setIsLoading(true);

    e.preventDefault();
    e.stopPropagation();
    const elements = e.target.elements;
    const formData = new FormData();

    formData.append("title", elements.title.value);
    formData.append("description", elements.description.value);
    formData.append("price", elements.price.value * 100);
    formData.append("size", elements.size.value);
    formData.append("weight", elements.weight.value);
    formData.append("origin", elements.origin.value);
    formData.append("reference", elements.reference.value);
    console.log(product.categories);

    for (let index = 0; index < product.categories.length; index++) {
      formData.append("categories", product.categories[index]);
    }
    formData.append("mainFile", elements.mainFile.files[0]);

    for (let i = 0; i < elements.file.files.length; i++) {
      formData.append("files", elements.file.files[i]);
    }

    fetch(`http://localhost:3000/api/product/${params.id}`, {
      method: "PUT",

      body: formData,
      credentials: "include",
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setIsLoading(false);
            toast.success("Produit modifié");
          });
        } else {
          setIsLoading(false);

          toast.error("Erreur");
        }
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Erreur");
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData(`http://localhost:3000/api/product/${params.id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        console.log(data[0]);

        setProduct(data[0]);
        setIsLoading(false);
      })
      .catch(() => {
        router.push("/admin/modifier");
      });
  }, []);

  return (
    <form
      onSubmit={(e) => {
        submitForm(e);
      }}
    >
      <input
        name="title"
        type="text"
        id="title"
        value={product?.title}
        placeholder="Nom de la pierre"
        onChange={(e) => {
          setProduct({ ...product, title: e.target.value });
        }}
      />
      <textarea
        name="description"
        id="description"
        placeholder="Description"
        value={product?.description}
        onChange={(e) => {
          setProduct({ ...product, description: e.target.value });
        }}
      />
      <input
        name="price"
        id="price"
        step="0.01"
        type="number"
        value={product?.price ? product.price / 100 : ""}
        placeholder="Prix"
        onChange={(e) => {
          setProduct({ ...product, price: Math.round(e.target.value * 100) });
        }}
      />
      <input
        name="size"
        id="size"
        type="text"
        placeholder="Taille"
        value={product?.size}
        onChange={(e) => {
          setProduct({ ...product, size: e.target.value });
        }}
      />
      <input
        name="weight"
        id="weight"
        type="number"
        placeholder="Poids (en grammes)"
        value={product?.weight ? product.weight : 0}
        onChange={(e) => {
          setProduct({ ...product, weight: e.target.value });
        }}
      />
      <input
        name="origin"
        id="origin"
        type="text"
        placeholder="Provenance"
        value={product?.origin}
        onChange={(e) => {
          setProduct({ ...product, origin: e.target.value });
        }}
      />
      <input
        name="reference"
        type="text"
        id="reference"
        placeholder="Référence"
        value={product?.reference}
        onChange={(e) => {
          setProduct({ ...product, reference: e.target.value });
        }}
      />
      <Select
        id="categories"
        options={options}
        isMulti
        styles={selectStyles}
        defaultValue={
          product?.categories
            ? product.categories.map((cat) => ({ label: cat, value: cat }))
            : []
        }
        onChange={(e) => {
          console.log(e);

          setProduct({ ...product, categories: e.map((cat) => cat.value) });
        }}
      />
      <label htmlFor="mainFile">Photo principale</label>
      <div className="picturesWrapper">
        {product?.mainFile ? (
          <ImgCard
            picture={product?.mainFile}
            typeOfFile={"mainFile"}
            data={product}
            setData={setProduct}
          />
        ) : null}
      </div>
      <input
        name="mainFile"
        id="mainFile"
        type="file"
        accept="image/png, image/jpeg"
      />
      <div className="picturesWrapper">
        {product?.file?.map((picture, index) => (
          <ImgCard
            key={picture + index}
            picture={picture}
            typeOfFile={"file"}
            data={product}
            setData={setProduct}
          />
        ))}
      </div>
      <input
        name="file"
        id="file"
        type="file"
        accept="image/png, image/jpeg"
        multiple
      />
      <button className="mainButton">Modifier</button>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </form>
  );
}
