"use client";
import React, { useContext } from "react";
import Link from "next/link";

// Import Image //
import Image from "next/image";
import logo from "@/public/assets/logo.webp";
import basketIcon from "@/public/icons/basket.webp";
import accountIcon from "@/public/icons/account.svg";

// Import Context //
import { AuthContext } from "@/app/context/AuthContext";

export default function NavAccompt() {
  const { isUserLog, setIsUserLog, userRole } = useContext(AuthContext);

  return (
    <nav id="accompte-nav">
      <Link href={"/commande/panier"}>
        <Image src={basketIcon} alt="" width={35} height={35} />
      </Link>
      <Link
        href={
          !isUserLog
            ? "/auth/logIn"
            : userRole === "ADMIN"
            ? "/admin/modifier"
            : "/mon-compte"
        }
      >
        <Image src={accountIcon} alt="" width={35} height={35} />
      </Link>
      {isUserLog ? (
        <div
          onClick={() => {
            fetch("http://localhost:3000/api/user/logout", {
              method: "POST",
              credentials: "include",
            })
              .then((response) => {
                if (response.ok) {
                  setIsUserLog(false);
                }
              })
              .catch((err) => {});
          }}
          className="cross"
        >
          <div className="crossBar"></div>
          <div className="crossBar"></div>
        </div>
      ) : null}
    </nav>
  );
}
