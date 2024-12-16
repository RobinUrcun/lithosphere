import React from "react";

export default function ContactForm() {
  return (
    <div className="contactForm">
      <h1>Contactez nous !</h1>
      <form>
        <div className="formRow">
          <label htmlFor="name">Nom et prénom : </label>
          <input id="name" placeholder="Jean Dupont" type="mail " />
        </div>
        <div className="formRow">
          <label htmlFor="mail">Adresse mail : </label>
          <input id="mail" placeholder="exemple@domaine.com" type="mail " />
        </div>
        <div className="formRow">
          <label htmlFor="phone">Téléphone : </label>
          <input id="phone" placeholder="06 12 34 56 78" type="number" />
        </div>
        <div className="formRow">
          <label htmlFor="message">Votre message : </label>

          <textarea
            rows={8}
            id="message"
            placeholder="Écrivez votre message ici..."
          ></textarea>
        </div>
        <button className="mainButton">Envoyer mon message</button>
      </form>
    </div>
  );
}
