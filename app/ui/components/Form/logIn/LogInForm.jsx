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

// Import regEx //
import { validEmail } from "@/app/utils/regex/regex";
import { validPassword } from "@/app/utils/regex/regex";

export default function LogInForm() {
  const { setIsUserLog, setUserRole } = useContext(AuthContext);
  const router = useRouter();
  const [isSpinner, setIsSpinner] = useState(false);
  const [form, setForm] = useState({ mail: "", password: "" });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSpinner(true);

        if (
          validEmail.test(e.target.mail.value) &&
          validPassword.test(e.target.password.value)
        ) {
          fetchData("http://localhost:3000/api/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: e.target.mail.value.toLowerCase(),
              password: e.target.password.value,
              cart: !localStorage.getItem("cart")
                ? null
                : localStorage.getItem("cart"),
            }),
            credentials: "include",
          })
            .then((data) => {
              setIsUserLog(true);
              setUserRole(data.userRole);
              setIsSpinner(false);

              localStorage.removeItem("cart");
              setIsSpinner(false);
              router.push("/boutique");
            })
            .catch(() => {
              toast.error("Mail ou mot de passe invalide");
              setIsSpinner(false);
            });
        } else {
          toast.error("Mail ou mot de passe invalide");
          setIsSpinner(false);
        }
      }}
    >
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
            validEmail.test(form.mail) && validPassword.test(form.password)
              ? false
              : "disabled"
          }`}
          disabled={
            validEmail.test(form.mail) && validPassword.test(form.password)
              ? false
              : true
          }
        >
          Se connecter
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
