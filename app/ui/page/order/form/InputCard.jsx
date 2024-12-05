import React from "react";

export default function InputCard({ type, id, placeholder, onChange, state }) {
  return (
    <div className="inputCard">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={(e) => {
          onChange({ ...state, [id]: e.target.value });
        }}
      />
    </div>
  );
}
