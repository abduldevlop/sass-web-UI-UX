import React from "react";
import NavBar from "@/app/NavBar";
import Foter from "@/app/Foter";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />
      {children}
      <Foter />
    </main>
  );
};

export default LandingPageLayout;
