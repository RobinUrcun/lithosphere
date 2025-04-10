"use client";

import React, { useEffect, useRef, useState } from "react";

// Import Router //
import { useRouter } from "next/navigation";

// Import Paypal //
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Import Toast //
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Regex //
import { validName, validNumber } from "@/app/utils/regex/regex";
export default function Paypal({ deliveryInfo, userInfo }) {
  const router = useRouter();

  const [isDisabled, seIsDisabled] = useState(true);

  const deliveryInfoRef = useRef(deliveryInfo);
  const userInfoRef = useRef(userInfo);

  useEffect(() => {
    deliveryInfoRef.current = deliveryInfo;
  }, [deliveryInfo]);

  useEffect(() => {
    userInfoRef.current = userInfo;
  }, [userInfo]);

  const initialOptions = {
    "client-id":
      "AfT77u7iQHDBLnzCdKZ2GJ4h_UkdWqBxo5bqc56IVskEC6vViiHT2I83BCkFpYrNedWDw-bQFEAxN--l",
    currency: "EUR",
    intent: "capture",
  };
  return (
    <div className="paypalWrapper">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          disabled={
            deliveryInfoRef.current.deliveryCompany &&
            deliveryInfoRef.current.road &&
            deliveryInfoRef.current.CP &&
            deliveryInfoRef.current.city &&
            deliveryInfoRef.current.country &&
            validName.test(userInfoRef.current.userSurname) &&
            validName.test(userInfoRef.current.userName) &&
            validNumber.test(userInfoRef.current.phone)
              ? false
              : true
          }
          createOrder={async () => {
            if (
              deliveryInfoRef.current.deliveryCompany &&
              deliveryInfoRef.current.road &&
              deliveryInfoRef.current.CP &&
              deliveryInfoRef.current.city &&
              deliveryInfoRef.current.country &&
              validName.test(userInfoRef.current.userSurname) &&
              validName.test(userInfoRef.current.userName) &&
              validNumber.test(userInfoRef.current.phone)
            ) {
              try {
                const response = await fetch(
                  "https://api.lithosphere83.fr/api/user/orders",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                      deliveryInfo: deliveryInfoRef.current,
                    }),
                  }
                );

                const orderData = await response.json();

                if (orderData.id) {
                  return orderData.id;
                } else {
                  const errorDetail = orderData?.details?.[0];
                  const errorMessage = errorDetail
                    ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                    : JSON.stringify(orderData);
                  throw new Error(errorMessage);
                }
              } catch (error) {
                toast.error("Champs manquants");
              }
            } else {
              toast.error("Champs manquants");
            }
          }}
          onApprove={async (data, actions) => {
            try {
              const response = await fetch(
                `https://api.lithosphere83.fr/api/user/orders/${data.orderID}/capture`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  credentials: "include",
                  body: JSON.stringify({
                    deliveryInfo: deliveryInfoRef.current,
                    commandeInfo: userInfoRef.current,
                  }),
                }
              );

              const orderData = await response.json();
              const errorDetail = orderData?.details?.[0];
              if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                toast.error("Paiement refusé");
                return actions.restart();
              } else if (errorDetail) {
                toast.error("Paiement refusé");
                throw new Error(
                  `${errorDetail.description} (${orderData.debug_id})`
                );
              } else {
                const transaction =
                  orderData.purchase_units[0].payments.captures[0];
                toast.success("Commande validée");

                router.push(`/confirmation/${transaction.id}`);
              }
            } catch (error) {
              toast.error("Paiement refusé");
            }
          }}
        />
      </PayPalScriptProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}
