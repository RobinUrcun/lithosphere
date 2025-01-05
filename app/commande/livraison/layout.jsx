"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

// Import Context //
import { AuthContext } from "@/app/context/AuthContext";

export default function layout({ children }) {
  const router = useRouter();
  const { isUserLog } = useContext(AuthContext);

  useEffect(() => {
    if (!isUserLog) {
      router.push("/auth/logIn");
    }
  });
  return children;
}
