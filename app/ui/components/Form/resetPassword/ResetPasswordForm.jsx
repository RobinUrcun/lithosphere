"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";

// Import Toast //
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Components //
import InputCard from "../inputCard/InputCard";
import SpinnerLoader from "../../loader/SpinnerLoader";

// Import regex //
import { validPassword } from "@/app/utils/regex/regex";

export default function ResetPasswordForm() {
  const router = useRouter();

  const [form, setForm] = useState({ password: "" });
  const [isLoader, setIsLoader] = useState(false);
  const token = useParams().id;

  const submitForm = (e) => {
    e.preventDefault();
    setIsLoader(true);
    fetch("https://lithosphere-api.vercel.app/api/user/reset-password/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        password: e.target.elements.password.value,
      }),
    }).then((response) => {
      setIsLoader(false);
      if (response.ok) {
        router.push("/auth/resetPasswordSuccess");
      } else {
        toast.error("Lien expiré");
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
        type="password"
        id="password"
        placeholder="Votre nouveau mot de passe"
        regex={validPassword}
        regexContent="Pour votre sécurité, choisissez un mot de passe avec au moins 6 caractères, dont au moins une lettre et un chiffre."
      />
      {isLoader ? (
        <SpinnerLoader />
      ) : (
        <button
          disabled={!validPassword.test(form.password)}
          className={`mainButton ${
            validPassword.test(form.password) ? "" : "disabled"
          }`}
        >
          Modifier
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
