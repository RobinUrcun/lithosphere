import React from "react";

// Import Components //
import InputCard from "@/app/ui/page/order/form/InputCard";
// Import Regex //
import { validName, validNumber } from "@/app/utils/regex/regex";

export default function MondialRelayForm({ userInfo, setUserInfo }) {
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
    </form>
  );
}
