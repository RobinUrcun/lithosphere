"use client";
import React, { useContext, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Import Image //
import Image from "next/image";
import basketIcon from "@/public/icons/basket.webp";
import accountIcon from "@/public/icons/account.svg";
import logOutIcon from "@/public/icons/logOut.svg";

// Import Context //
import { AuthContext } from "@/app/context/AuthContext";

export default function NavAccompt({ isOpen, setIsOpen }) {
  const router = useRouter();

  const { isUserLog, setIsUserLog, userRole } = useContext(AuthContext);

  const [isLogNavOpen, setIsLogNavOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLogNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav id="accompte-nav">
      <Link
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        href={"/commande/panier"}
      >
        <Image src={basketIcon} alt="" width={35} height={35} />
      </Link>
      {isUserLog ? (
        <Link
          href={
            userRole === "ADMIN"
              ? "/admin/modifier"
              : "/mon-compte/informations"
          }
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Image src={accountIcon} alt="" width={35} height={35} />
        </Link>
      ) : (
        <div
          onClick={() => {
            setIsLogNavOpen(true);
          }}
          className={`accountLink `}
          ref={dropdownRef}
        >
          <Image src={accountIcon} alt="" width={35} height={35} />
          <div className={`authNav ${isLogNavOpen ? "open" : ""}`}>
            <Link
              href={"/auth/logIn"}
              className="mainButton"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
                setIsLogNavOpen(false);
                router.push("/auth/logIn");
              }}
            >
              Se connecter
            </Link>
            <Link
              href={"/auth/signUp"}
              className="mainButton"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
                setIsLogNavOpen(false);
                router.push("/auth/signUp");
              }}
            >
              S'inscrire
            </Link>
          </div>
        </div>
      )}
      {isUserLog ? (
        <Image
          src={logOutIcon}
          alt=""
          width={35}
          height={35}
          onClick={() => {
            fetch("http://localhost:3000/api/user/logout", {
              method: "POST",
              credentials: "include",
            })
              .then((response) => {
                if (response.ok) {
                  setIsUserLog(false);
                  setIsOpen(false);
                  console.log("oklougout");

                  window.location.reload();
                }
              })
              .catch((err) => {});
          }}
        />
      ) : null}
    </nav>
  );
}
