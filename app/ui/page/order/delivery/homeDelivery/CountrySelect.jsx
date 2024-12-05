import React from "react";

export default function CountrySelect({ state, onChange }) {
  return (
    <select
      className="inputCard"
      name="country"
      id="country"
      autoComplete="country"
      value={state.country}
      onChange={(e) => {
        onChange({ ...state, country: e.target.value });
      }}
    >
      <option value={""}>Choisissez un pays</option>
      <option value="FR">France</option>
      <option value="DE">Allemagne</option>
      <option value="AT">Autriche</option>
      <option value="BE">Belgique</option>
      <option value="BG">Bulgarie</option>
      <option value="CY">Chypre</option>
      <option value="HR">Croatie</option>
      <option value="DK">Danemark</option>
      <option value="ES">Espagne</option>
      <option value="EE">Estonie</option>
      <option value="FI">Finlande</option>
      <option value="FR">France</option>
      <option value="GR">Grèce</option>
      <option value="HU">Hongrie</option>
      <option value="IE">Irlande</option>
      <option value="IT">Italie</option>
      <option value="LV">Lettonie</option>
      <option value="LT">Lituanie</option>
      <option value="LU">Luxembourg</option>
      <option value="MT">Malte</option>
      <option value="NL">Pays-Bas</option>
      <option value="PL">Pologne</option>
      <option value="PT">Portugal</option>
      <option value="RO">Roumanie</option>
      <option value="GB">Royaume-Uni</option>
      <option value="SK">Slovaquie</option>
      <option value="SI">Slovénie</option>
      <option value="SE">Suède</option>
    </select>
  );
}
