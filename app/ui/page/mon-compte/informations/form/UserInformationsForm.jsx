"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Import Functions//
import { fetchData } from "@/app/utils/functions/fetchData";

// Import Toast //
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import RegEx //
import { validName, validPassword } from "@/app/utils/regex/regex";

// Import Components //
import Input from "../input/Input";
import Loader from "@/app/ui/components/loader/Loader";
import SpinnerLoader from "@/app/ui/components/loader/SpinnerLoader";

export default function UserInformationsForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isSpinner, setIsSpinner] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    newPassword: "",
  });

  const fetchForm = (e) => {
    e.preventDefault();
    setIsSpinner(true);

    const elements = e.target;
    if (
      validName.test(elements.name.value) &&
      validName.test(elements.surname.value) &&
      validPassword.test(elements.password.value) &&
      validPassword.test(elements.newPassword.value)
    ) {
      const formValue = {
        name: elements.name.value,
        surname: elements.surname.value,
        actualPassword: elements.password.value,

        newPassword: elements.newPassword.value,
      };

      fetch("https://lithosphere-api.vercel.app/api/user/userInfo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
        credentials: "include",
      })
        .then((response) => {
          if (response.ok) {
            setIsSpinner(false);

            toast.success("Informations modifiées");
          } else {
            if (response.status == 403) {
              setIsSpinner(false);

              toast.error("Mot de passe actuel erroné");
            } else {
              setIsSpinner(false);

              toast.error("Erreur");
            }
          }
        })
        .catch((err) => {
          setIsSpinner(false);

          toast.error("Erreur");
        });
    } else {
      setIsSpinner(false);

      toast.error("Erreur");
    }
  };

  useEffect(() => {
    setIsLoading(true);

    fetch("https://lithosphere-api.vercel.app/api/user/userInfo", {
      method: "GET",

      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setUserInfo({ ...data, password: "", newPassword: "" });
            setIsLoading(false);
          });
        } else {
          router.push("/auth/logIn");
        }
      })
      .catch((err) => {
        router.push("/auth/logIn");
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <form
        className="accountInfoForm"
        onSubmit={(e) => {
          fetchForm(e);
        }}
      >
        <p className="mail">{userInfo.email}</p>
        <Input
          id="name"
          type="text"
          placeholder="Votre prénom"
          value={userInfo}
          setValue={setUserInfo}
          regex={validName}
          regexContent="Votre prénom semble incorrect. Assurez-vous qu'il contient au moins 1 caractère et  ne contient pas de chiffres ou de caractères spéciaux."
        />
        <Input
          id="surname"
          type="text"
          placeholder="Votre nom"
          value={userInfo}
          setValue={setUserInfo}
          regex={validName}
          regexContent="Votre nom semble incorrect. Assurez-vous qu'il contient au moins 1 caractère et  ne contient pas de chiffres ou de caractères spéciaux."
        />
        <Input
          id="password"
          type="password"
          placeholder="Mot de passe actuel"
          value={userInfo}
          setValue={setUserInfo}
          regex={validPassword}
          regexContent="Pour votre sécurité, choisissez un mot de passe avec au moins 6 caractères, dont au moins une lettre et un chiffre."
        />
        <Input
          id="newPassword"
          type="password"
          placeholder="Nouveau mot de passe"
          value={userInfo}
          setValue={setUserInfo}
          regex={validPassword}
          regexContent="Pour votre sécurité, choisissez un mot de passe avec au moins 6 caractères, dont au moins une lettre et un chiffre."
        />
        {isSpinner ? (
          <SpinnerLoader />
        ) : (
          <button
            className={`mainButton ${
              validName.test(userInfo.name) &&
              validName.test(userInfo.surname) &&
              validPassword.test(userInfo.password) &&
              validPassword.test(userInfo.newPassword)
                ? null
                : "disabled"
            }`}
            disabled={
              validName.test(userInfo.name) &&
              validName.test(userInfo.surname) &&
              validPassword.test(userInfo.password) &&
              validPassword.test(userInfo.newPassword)
                ? false
                : true
            }
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
}
