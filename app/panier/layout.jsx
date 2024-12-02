import React from "react";

// Import Components //
import ProgressBar from "../ui/page/cart/ProgressBar/ProgressBar";

export default function layout({ children }) {
  return (
    <React.Fragment>
      <section>
        <ProgressBar />
        {children}
      </section>
    </React.Fragment>
  );
}
