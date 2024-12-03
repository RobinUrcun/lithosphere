"use client";

import React, { useEffect } from "react";
import { MondialWidget } from "@/app/utils/mondialRelay/mondialRelay";
export default function MondialRelay({ deliveryInfo, setDeliveryInfo }) {
  useEffect(() => {
    MondialWidget(setDeliveryInfo, deliveryInfo);
  }, []);
  return (
    <div className="widgetWrapper">
      <div id="Zone_Widget"></div>
    </div>
  );
}
