"use client";

import React, { useState } from "react";

export default function Input({
  id,
  type,
  placeholder,
  value,
  setValue,
  regex,
  regexContent,
}) {
  const [isRegexCorrect, setIsRegexCorrect] = useState(regex.test(value[id]));
  const autoComplete = {
    name: "given-name",
    surname: "family-name",
    password: "current-password",
    newPassword: "new-password",
  };
  return (
    <div className="inputForm">
      <label htmlFor={id}>{placeholder} :</label>
      <div className="inputWrapper">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value[id]}
          autoComplete={autoComplete[id]}
          onChange={(e) => {
            setValue({ ...value, [id]: e.target.value });
            if (!regex.test(e.target.value)) {
              setIsRegexCorrect(false);
            } else {
              setIsRegexCorrect(true);
            }
          }}
        />
        <div className={`help ${!isRegexCorrect ? "helpDisplay" : null}`}>
          <p className="helpBtn">?</p>
          <div className="helpContent">{regexContent}</div>
        </div>
      </div>
    </div>
  );
}
