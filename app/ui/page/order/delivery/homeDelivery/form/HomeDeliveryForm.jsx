import React from "react";

// Import Components //
import InputCard from "@/app/ui/page/order/form/InputCard";
import CountrySelect from "../CountrySelect";

// Import Regex //
import {
  validName,
  validNumber,
  validPostalCode,
  validRoadName,
} from "@/app/utils/regex/regex";

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
        regex={validName}
        regexContent="Votre prénom semble incorrect. Assurez-vous que votre prénom contienne au moins 1 caractère et  ne contienne pas de chiffres ou de caractères spéciaux."
      />
      <InputCard
        type="text"
        id="userSurname"
        placeholder="Entrez votre nom"
        state={userInfo}
        onChange={setUserInfo}
        regex={validName}
        regexContent="Votre nom semble incorrect. Assurez-vous que votre nom contienne au moins 1 caractère et  ne contienne pas de chiffres ou de caractères spéciaux."
      />
      <InputCard
        type="tel"
        id="phone"
        placeholder="Saisissez votre numéro"
        state={userInfo}
        onChange={setUserInfo}
        regex={validNumber}
        regexContent="Votre numéro semble incorrect. Assurez-vous que votre numéro contienne au moins 1 caractère, ne contienne que des chiffres et ne contienne pas de caractères spéciaux."
      />
      <InputCard
        type="text"
        id="road"
        placeholder="Saisissez votre adresse"
        state={deliveryInfo}
        onChange={setDeliveryInfo}
        regex={validRoadName}
        regexContent="Votre adresse semble incorrect. Assurez-vous que votre adresse contienne au moins 5 caractères et ne contienne pas de caractères spéciaux."
      />

      <div className="cityInfoWrapper">
        <InputCard
          type="number"
          id="CP"
          placeholder="Code Postal"
          state={deliveryInfo}
          onChange={setDeliveryInfo}
          regex={validPostalCode}
          regexContent="Votre code postal semble incorrect. Assurez-vous que votre code postal contienne au moins 1 caractère, ne contienne que des chiffres et ne contienne pas de caractères spéciaux."
        />
        <InputCard
          type="text"
          id="city"
          placeholder="Entrez votre ville"
          state={deliveryInfo}
          onChange={setDeliveryInfo}
          regex={validName}
          regexContent="Votre ville semble incorrect. Assurez-vous que votre ville contienne au moins 1 caractère, ne contienne que des chiffres et ne contienne pas de caractères spéciaux."
        />
      </div>
      <CountrySelect state={deliveryInfo} onChange={setDeliveryInfo} />
    </form>
  );
}
