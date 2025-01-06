"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Import Components //
import InputCard from "../inputCard/InputCard";
import SpinnerLoader from "../../loader/SpinnerLoader";

// Import Toast //
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import regex //
import { validEmail } from "@/app/utils/regex/regex";

export default function ForgetPasswordForm() {
  const router = useRouter();
  const [form, setForm] = useState({ mail: "" });
  const [isLoader, setIsLoader] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setIsLoader(true);
    fetch("https://api.lithosphere83.fr/api/user/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: e.target.elements.mail.value }),
    }).then((response) => {
      setIsLoader(false);
      if (response.ok) {
        router.push("/auth/sentPassword");
      } else {
        toast.error("Utilisateur non trouvé");
      }
    });
  };
  return (
    <form
      onSubmit={(e) => {
        submitForm(e);
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
      {isLoader ? (
        <SpinnerLoader />
      ) : (
        <button
          disabled={!validEmail.test(form.mail)}
          className={`mainButton ${
            validEmail.test(form.mail) ? "" : "disabled"
          }`}
        >
          Nouveau mot de passe
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
