import React from "react";

// Import Components //
import InputCard from "@/app/ui/components/Form/inputCard/InputCard";

export default function MondialRelayForm() {
  return (
    <form>
      <InputCard type="text" id="userName" placeholder="Entrez votre prénom" />
      <InputCard type="text" id="userSurname" placeholder="Entrez votre nom" />
      <InputCard type="tel" id="phone" placeholder="Saisissez votre numéro" />
    </form>
  );
}
