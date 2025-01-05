"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// Select  Librairy //
const Select = dynamic(() => import("react-select"), { ssr: false });
import options from "@/app/utils/ShopCategories/shopCategories.json";
import { selectStyles } from "@/app/ui/components/Select/selectStyles";

// Import Toast //
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Components //
import SpinnerLoader from "@/app/ui/components/loader/SpinnerLoader";

export default function CreateProduct() {
  const [select, setIsSelect] = useState([]);
  const [isSpinner, setIsSpinner] = useState(false);
  const submitProduct = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSpinner(true);

    const elements = e.target.elements;
    const formData = new FormData();

    formData.append("title", elements.title.value);
    formData.append("description", elements.description.value);
    formData.append("price", elements.price.value * 100);
    formData.append("size", elements.size.value);
    formData.append("weight", elements.weight.value);
    formData.append("origin", elements.origin.value);
    formData.append("reference", elements.reference.value);
    for (let index = 0; index < select.length; index++) {
      formData.append("categories", select[index].value);
    }
    formData.append("mainFile", elements.mainFile.files[0]);
    for (let i = 0; i < elements.file.files.length; i++) {
      formData.append("files", elements.file.files[i]);
    }
    fetch("https://lithosphere-api.vercel.app/api/product", {
      method: "POST",
      credentials: "include",
      body: formData,
    })
      .then((response) => {
        if (response.status === 201) {
          setIsSpinner(false);
          toast.success("Article ajouté");
        } else {
          setIsSpinner(false);
          toast.error("Une erreur s'est produite");
        }
      })
      .catch((error) => {
        setIsSpinner(false);
        toast.error("Une erreur s'est produite");
      });
  };

  return (
    <form
      onSubmit={(e) => {
        submitProduct(e);
      }}
      encType="multipart/form-data"
    >
      <input
        name="title"
        type="text"
        id="title"
        placeholder="Nom de la pierre"
      />
      <textarea name="description" id="description" placeholder="Description" />
      <input
        name="price"
        id="price"
        step="0.01"
        type="number"
        placeholder="Prix"
      />
      <input name="size" id="size" type="text" placeholder="Taille" />
      <input
        name="weight"
        id="weight"
        type="number"
        placeholder="Poids (en grammes)"
      />
      <input name="origin" id="origin" type="text" placeholder="Provenance" />
      <input
        name="reference"
        type="text"
        id="reference"
        placeholder="Référence"
      />
      <Select
        id="categories"
        options={options}
        isMulti
        styles={selectStyles}
        onChange={(e) => {
          setIsSelect(e);
        }}
      />
      <label htmlFor="mainFile">Photo principale</label>
      <input
        name="mainFile"
        id="mainFile"
        type="file"
        accept="image/png, image/jpeg"
      />
      <label htmlFor="file">Photos</label>

      <input
        name="file"
        id="file"
        type="file"
        accept="image/png, image/jpeg"
        multiple
      />
      {isSpinner ? (
        <SpinnerLoader />
      ) : (
        <button className="mainButton">creer</button>
      )}
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
