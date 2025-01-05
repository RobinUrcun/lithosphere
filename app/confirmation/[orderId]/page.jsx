import React from "react";

// Import Image //
import Image from "next/image";
import valideIcon from "@/public/icons/valideIcon.webp";

// Import Components //
import OrderIdCard from "@/app/ui/page/confirmation/OrderIdCard";
import Link from "next/link";

export const metadata = {
  title: "Confirmation de Commande - Merci pour votre Achat | Lithosphere 83",
  description:
    "Votre commande a été confirmée avec succès ! Merci de faire confiance à Lithosphere 83 pour vos minéraux et bijoux artisanaux. Un e-mail de confirmation vous a été envoyé.",
};

export default function page() {
  return (
    <section className="confirmationSection">
      <Image src={valideIcon} height={100} width={100} alt="Validé" />
      <h1>Confirmation de commande</h1>
      <article>
        <OrderIdCard />
      </article>
      <aside>
        <p>Retrouvez les détails de votre commande dans l'espace mon compte</p>
        <Link className="mainButton" href={"/mon-compte/commandes"}>
          Mon compte
        </Link>
      </aside>
    </section>
  );
}
