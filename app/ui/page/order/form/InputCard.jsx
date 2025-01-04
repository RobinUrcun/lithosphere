"use client";

import React, { useState } from "react";

export default function InputCard({
  type,
  id,
  placeholder,
  onChange,
  state,
  regex,
  regexContent,
}) {
  const [isRegexCorrect, setIsRegexCorrect] = useState(regex.test(state[id]));

  const autoComplete = {
    userName: "given-name",
    userSurname: "family-name",
    phone: "tel",
    CP: "postal-code",
    road: "street-address",
    city: "address-level2",
  };
  return (
    <div className="inputCard">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete[id]}
        onChange={(e) => {
          onChange({ ...state, [id]: e.target.value });
        }}
      />
      <div className={`help ${!isRegexCorrect ? "helpDisplay" : null}`}>
        <p className="helpBtn">?</p>
        <div className="helpContent">{regexContent}</div>
      </div>
    </div>
  );
}
