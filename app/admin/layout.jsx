import React from "react";

// Import Functions //
import { fetchData } from "../utils/functions/fetchData";

// Import Cookies //
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Import Components //
import AdminNav from "../ui/page/admin/AdminNav";

export default async function layout({ children }) {
  const cookieStore = await cookies();
  const userToken = cookieStore.get("userToken");
  if (!userToken) {
    return redirect("/auth/logIn");
  }
  try {
    const response = await fetchData("http://localhost:3000/api/user/role", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: userToken.value,
      },
      credentials: "include",
    });

    if (response.role !== "ADMIN") {
      throw new Error("Role ADMIN requis");
    }
  } catch (error) {
    redirect("/404");
  }

  return (
    <section className="adminSection">
      <AdminNav />
      {children}
    </section>
  );
}
