import React from "react";

// Import Components //
import CreateProduct from "@/app/ui/components/Form/createProduct/CreateProduct";

export default function page() {
  return (
    <article className="createArticle">
      <h2>Créer un nouvel article</h2>
      <CreateProduct />
    </article>
  );
}

// const submitProduct = (e) => {
//     setIsLoading(true);
//     e.preventDefault();
//     e.stopPropagation();
//     const elements = e.target.elements;
//     const formData = new FormData();

//     formData.append("title", elements.title.value);
//     formData.append("description", elements.description.value);
//     formData.append("price", elements.price.value * 100);
//     formData.append("size", elements.size.value);
//     formData.append("weight", elements.weight.value);
//     formData.append("origin", elements.origin.value);
//     formData.append("reference", elements.reference.value);
//     for (let index = 0; index < select.length; index++) {
//       formData.append("categories", select[index].value);
//     }
//     formData.append("mainFile", elements.mainFile.files[0]);
//     for (let i = 0; i < elements.file.files.length; i++) {
//       formData.append("files", elements.file.files[i]);
//     }
//     // http://localhost:3000/api/product //
//     fetch("https://mineraux83-api.vercel.app/api/product/", {
//       method: "POST",
//       headers: {
//         authorization: `Bearer ${localStorage.getItem("userInfoToken")}`,
//       },
//       body: formData,
//     })
//       .then((response) => {
//         if (response.status === 201) {
//           setIsLoading(false);
//           showToast();
//         } else {
//           setIsLoading(false);
//           showToastFailed();
//         }
//       })
//       .catch((error) => {
//         setIsLoading(false);
//         showToastFailed();
//       });
//   };
