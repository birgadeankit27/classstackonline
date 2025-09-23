import React from "react";
import Hero from "../Componant/Hero";
import AboutSection from "../Componant/AboutSection";
import Features from "../Componant/Features";
import Divider from "../Componant/Divider";
import Internships from "./Internships";
import Contact from "./Contact";
import FAQs from "./FAQs";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Divider color="#ffffff" />
      <AboutSection />
      <Divider color="#f9fafb" flip />
      <Features />
      <Divider color="#ffffff" />
      <Internships />
      <Divider color="#f9fafb" flip />
      <Contact />
      <Divider color="#ffffff" />
      <FAQs />
    </div>
  );
}

export default Home;
