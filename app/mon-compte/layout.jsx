import React from "react";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Import Components //
import UserNav from "../ui/page/mon-compte/nav/UserNav";

export default async function layout({ children }) {
  const cookieStore = await cookies();
  const userToken = cookieStore.get("userToken");
  if (!userToken) {
    return redirect("/auth/logIn");
  }

  return (
    <section className="accountSection">
      <UserNav />
      {children}
    </section>
  );
}
