"use client";

import React, { useState } from "react";

export default function InputCard({
  form,
  setForm,
  type,
  id,
  placeholder,
  regex,
  regexContent,
}) {
  const [isRegexCorrect, setIsRegexCorrect] = useState(regex.test(form[id]));

  const autoComplete = {
    name: "given-name",
    surname: "family-name",
    mail: "email",
    password: "current-password",
    newPassword: "new-password",
  };
  return (
    <div className="inputCard">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete[id]}
        onChange={(e) => {
          setForm({ ...form, [id]: e.target.value });
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
  );
}
