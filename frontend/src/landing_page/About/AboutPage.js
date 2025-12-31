import React from "react";
import Hero from "./Hero";
import Team from "./Team";

function AboutPage() {
  return (
    <>
      {/* 🔹 Hero Section - Introduction */}
      <Hero />

      {/* 🔹 Team Section - People behind the company */}
      <Team />
    </>
  );
}

export default AboutPage;
