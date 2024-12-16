import React from "react";

// Import Components //
import { DynamicMap } from "./map/DynamicMap";
import InfoCard from "./infoCard/InfoCard";

// Import Image //
import phoneLogo from "@/public/icons/logo_phone.png";
import mailLogo from "@/public/icons/logo_mail.png";

export default function ContactAside() {
  return (
    <div className="contactAside">
      <div className="contactInfo">
        <InfoCard
          href={"tel:0643021813"}
          imgUrl={phoneLogo}
          content={"06 43 02 18 13"}
          title="Téléphone"
        />
        <InfoCard
          href={"mailto:moragerard@hotmail.fr"}
          imgUrl={mailLogo}
          content={"moragerard@hotmail.fr"}
          title="Mail"
        />
      </div>
      <DynamicMap />
    </div>
  );
}
