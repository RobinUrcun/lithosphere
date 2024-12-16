"use client";

import dynamic from "next/dynamic";

export const DynamicMap = dynamic(
  () => import("@/app/ui/page/contact/contactAside/map/ContactMap"),
  {
    ssr: false,
  }
);
