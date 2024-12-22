"use client";

import React from "react";
import { usePathname } from "next/navigation";

// Import Link //
import Link from "next/link";

export default function LinkCard({ href, title }) {
  const pathname = usePathname();
  return (
    <div
      className={`accountNavLink ${pathname.includes(href) ? "select" : null}`}
    >
      <Link href={href}>{title}</Link>
    </div>
  );
}
