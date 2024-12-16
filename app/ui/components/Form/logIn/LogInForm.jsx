"use client";
import React, { useContext } from "react";

// Import Router //
import { useRouter } from "next/navigation";

// Import Functions //
import { fetchData } from "@/app/utils/functions/fetchData";

// Import Components //
import InputCard from "../inputCard/InputCard";

// Import Context //
import { AuthContext } from "@/app/context/AuthContext";

// Import Toast //
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LogInForm() {
  const { setIsUserLog } = useContext(AuthContext);
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
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
          .then(() => {
            localStorage.removeItem("cart");
            setIsUserLog(true);
            const previousPage = document.referrer;
            if (
              previousPage &&
              (!previousPage.includes("404") || !previousPage.includes("admin"))
            ) {
              router.back();
            } else {
              router.push("/boutique");
            }
          })
          .catch(() => {
            toast.error("Mail ou mot de passe invalide");
          });
      }}
    >
      <InputCard type="mail" id="mail" placeholder="Votre adresse mail" />
      <InputCard
        type="password"
        id="password"
        placeholder="votre mot de passe"
      />

      <button className="mainButton">Se connecter</button>
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
