import React from "react";

// Import Components //
import ProgressBar from "../ui/page/order/cart/ProgressBar/ProgressBar";

export default function layout({ children }) {
  return (
    <React.Fragment>
      <section className="orderSection">
        <ProgressBar />
        {children}
      </section>
    </React.Fragment>
  );
}
