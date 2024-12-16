"use client";
import React, { useContext } from "react";

// Import Router //
import { useRouter } from "next/navigation";

// Import Functions //
import { fetchData } from "@/app/utils/functions/fetchData";

// Import Regex //
import { validName, validEmail, validPassword } from "@/app/utils/regex/regex";

// Import Components //
import InputCard from "../inputCard/InputCard";
// Import Context //
import { AuthContext } from "@/app/context/AuthContext";

// Import Toast //
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpForm() {
  const { setIsUserLog } = useContext(AuthContext);
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = e.target;

        if (
          validName.test(formData.name.value) &&
          validName.test(formData.surname.value) &&
          validEmail.test(formData.email.value) &&
          validPassword.test(formData.password.value)
        ) {
          fetchData("http://localhost:3000/api/user/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email.value.toLowerCase(),
              password: formData.password.value,
              name: formData.name.value,
              surname: formData.surname.value,
              cart: !localStorage.getItem("cart")
                ? null
                : localStorage.getItem("cart"),
            }),
            credentials: "include",
          })
            .then(() => {
              localStorage.removeItem("cart");
              setIsUserLog(true);
              router.push("/boutique");
            })
            .catch(() => {
              toast.error("Adresse mail déjà utilisée");
            });
        }
      }}
    >
      <InputCard type="text" id="surname" placeholder="Votre nom" />
      <InputCard type="text" id="name" placeholder="Votre prénom" />
      <InputCard type="mail" id="email" placeholder="Votre adresse mail" />
      <InputCard
        type="password"
        id="password"
        placeholder="votre mot de passe"
      />
      <button className="mainButton">S'inscrire</button>
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
