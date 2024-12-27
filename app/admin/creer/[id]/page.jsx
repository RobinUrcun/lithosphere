import React from "react";

// Import Link //
import Link from "next/link";

// Import Components //
import CreateExistingProduct from "@/app/ui/page/admin/createExistingProduct/CreateExistingProduct";

export default function page() {
  return (
    <React.Fragment>
      <Link className="backButton" href="/admin/modifier">
        Retour
      </Link>
      <CreateExistingProduct />
    </React.Fragment>
  );
}
