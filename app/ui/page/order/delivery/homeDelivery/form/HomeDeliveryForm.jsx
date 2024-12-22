import React from "react";

// Import Components //
import InputCard from "@/app/ui/page/order/form/InputCard";

import CountrySelect from "../CountrySelect";

export default function HomeDeliveryForm({
  deliveryInfo,
  setDeliveryInfo,
  userInfo,
  setUserInfo,
}) {

  return (
    <form>
      <InputCard
        type="text"
        id="userName"
        placeholder="Entrez votre prénom"
        state={userInfo}
        onChange={setUserInfo}
      />
      <InputCard
        type="text"
        id="userSurname"
        placeholder="Entrez votre nom"
        state={userInfo}
        onChange={setUserInfo}
      />
      <InputCard
        type="tel"
        id="phone"
        placeholder="Saisissez votre numéro"
        state={userInfo}
        onChange={setUserInfo}
      />
      <InputCard
        type="text"
        id="road"
        placeholder="Saisissez votre adresse"
        state={deliveryInfo}
        onChange={setDeliveryInfo}
      />

      <div className="cityInfoWrapper">
        <InputCard
          type="number"
          id="CP"
          placeholder="Code Postal"
          state={deliveryInfo}
          onChange={setDeliveryInfo}
        />
        <InputCard
          type="text"
          id="city"
          placeholder="Entrez votre ville"
          state={deliveryInfo}
          onChange={setDeliveryInfo}
        />
      </div>
      <CountrySelect state={deliveryInfo} onChange={setDeliveryInfo} />
    </form>
  );
}
