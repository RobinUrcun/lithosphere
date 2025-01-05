"use client";
import React, { useState, useContext } from "react";

// Import Router //
import { useRouter } from "next/navigation";

// Import Functions //
import { fetchData } from "@/app/utils/functions/fetchData";

// Import Components //
import InputCard from "../inputCard/InputCard";
import SpinnerLoader from "../../loader/SpinnerLoader";

// Import Context //
import { AuthContext } from "@/app/context/AuthContext";

// Import Toast //
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import RegEx //
import { validEmail, validName, validPassword } from "@/app/utils/regex/regex";

export default function SignUpForm() {
  const { setIsUserLog, setUserRole } = useContext(AuthContext);
  const router = useRouter();
  const [isSpinner, setIsSpinner] = useState(false);
  const [form, setForm] = useState({
    surname: "",
    name: "",
    mail: "",
    password: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSpinner(true);
        const formData = e.target;

        if (
          validName.test(formData.name.value) &&
          validName.test(formData.surname.value) &&
          validEmail.test(formData.mail.value) &&
          validPassword.test(formData.password.value)
        ) {
          fetchData("http://localhost:3000/api/user/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.mail.value.toLowerCase(),
              password: formData.password.value,
              name: formData.name.value,
              surname: formData.surname.value,
              cart: !localStorage.getItem("cart")
                ? null
                : localStorage.getItem("cart"),
            }),
            credentials: "include",
          })
            .then((data) => {
              localStorage.removeItem("cart");

              setIsUserLog(true);

              setUserRole(data.userRole);

              setIsSpinner(false);

              router.push("/boutique");
            })
            .catch(() => {
              setIsSpinner(false);

              toast.error("Adresse mail déjà utilisée");
            });
        } else {
          toast.error("Champ(s) manquant(s)");

          setIsSpinner(false);
        }
      }}
    >
      <InputCard
        form={form}
        setForm={setForm}
        type="text"
        id="surname"
        placeholder="Votre nom"
        regex={validName}
        regexContent="Votre nom semble incorrect. Assurez-vous qu'il contient au moins 1 caractère et  ne contient pas de chiffres ou de caractères spéciaux."
      />
      <InputCard
        form={form}
        setForm={setForm}
        type="text"
        id="name"
        placeholder="Votre prénom"
        regex={validName}
        regexContent="Votre prénom semble incorrect. Assurez-vous qu'il contient au moins 1 caractère et  ne contient pas de chiffres ou de caractères spéciaux."
      />
      <InputCard
        form={form}
        setForm={setForm}
        type="mail"
        id="mail"
        placeholder="Votre adresse mail"
        regex={validEmail}
        regexContent="Veuillez entrer une adresse e-mail valide, au format : utilisateur@domaine.com."
      />
      <InputCard
        form={form}
        setForm={setForm}
        type="password"
        id="password"
        placeholder="votre mot de passe"
        regex={validPassword}
        regexContent="Pour votre sécurité, choisissez un mot de passe avec au moins 6 caractères, dont au moins une lettre et un chiffre."
      />
      {isSpinner ? (
        <SpinnerLoader />
      ) : (
        <button
          className={`mainButton ${
            validName.test(form.name) &&
            validName.test(form.surname) &&
            validEmail.test(form.mail) &&
            validPassword.test(form.password)
              ? false
              : "disabled"
          }`}
          disabled={
            validName.test(form.name) &&
            validName.test(form.surname) &&
            validEmail.test(form.mail) &&
            validPassword.test(form.password)
              ? false
              : true
          }
        >
          S'inscrire
        </button>
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
