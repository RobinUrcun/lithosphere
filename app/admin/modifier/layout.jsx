import React from "react";

export default function layout({ children }) {
  return (
    <article className="modifyArticle">
      <h2>Modifier un article</h2>
      {children}
    </article>
  );
}
