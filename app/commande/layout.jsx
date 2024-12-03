import React from "react";

// Import Components //
import ProgressBar from "../ui/page/order/ProgressBar/ProgressBar";

// Import Context //
import OrderProvider from "../context/OrderContext";

export default function layout({ children }) {
  return (
    <React.Fragment>
      <OrderProvider>
        <section className="orderSection">
          <ProgressBar />
          {children}
        </section>
      </OrderProvider>
    </React.Fragment>
  );
}
