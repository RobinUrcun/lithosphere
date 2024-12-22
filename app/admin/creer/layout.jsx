import React from "react";

export default function layout({ children }) {
  return (
    <article className="createArticle">
      <h2>Créer un nouvel article</h2>
      {children}
    </article>
  );
}
