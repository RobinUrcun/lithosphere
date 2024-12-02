"use client";
import React from "react";

// Import Router //
import { useRouter } from "next/navigation";

// Import Functions //
import { fetchData } from "@/app/utils/functions/fetchData";

// Import Components //
import InputCard from "../inputCard/InputCard";

export default function LogInArticle() {
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
          .then((data) => {
            localStorage.removeItem("cart");
            localStorage.setItem("userRole", data.userRole);
            router.push("/");
          })
          .catch(console.log("erreur de co"));
      }}
    >
      <InputCard type="mail" id="mail" placeholder="Votre adresse mail" />
      <InputCard
        type="password"
        id="password"
        placeholder="votre mot de passe"
      />

      <button className="mainButton">Se connecter</button>
    </form>
  );
}
