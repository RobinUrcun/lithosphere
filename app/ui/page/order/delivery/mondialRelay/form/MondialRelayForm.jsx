import React from "react";

// Import Components //
import InputCard from "@/app/ui/page/order/form/InputCard";

export default function MondialRelayForm({ userInfo, setUserInfo }) {
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
    </form>
  );
}
