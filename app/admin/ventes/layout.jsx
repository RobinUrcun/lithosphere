import React from "react";

export default function layout({ children }) {
  return (
    <article className="saleArticle">
      <h2>Mes ventes</h2>
      {children}
    </article>
  );
}
