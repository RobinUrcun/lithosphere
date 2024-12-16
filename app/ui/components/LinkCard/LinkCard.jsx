"use client";

import React from "react";
import { usePathname } from "next/navigation";

// Import Link //
import Link from "next/link";

export default function LinkCard({ href, title }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={`accountNavLink ${pathname == href ? "select" : null}`}>
      <Link href={href}>{title}</Link>
    </div>
  );
}
