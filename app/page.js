import React from "react";

// Import components //
import MainSection from "./ui/page/home/MainSection";
import Collections from "./ui/page/home/Collections";

export default function Home() {
  return (
    <React.Fragment>
      <MainSection />
      <Collections />
    </React.Fragment>
  );
}
