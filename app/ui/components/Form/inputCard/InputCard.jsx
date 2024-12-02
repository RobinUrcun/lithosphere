"use client";

import React, { useState } from "react";

export default function InputCard({ type, id, placeholder }) {
  const [champs, setChamps] = useState("");
  console.log(champs);
  return (
    <div className="inputCard">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={(e) => {
          setChamps(e.target.value);
        }}
      />
    </div>
  );
}
