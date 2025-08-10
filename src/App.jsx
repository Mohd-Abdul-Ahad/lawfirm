import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import Experience from "./Components/Experience";
import WhyChooseUs from "./pages/WhyChooseUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import FAQSection from "./pages/FaqSection";
import TeamSection from "./pages/TeamMembers";
import ServicesSection from "./pages/ServicesSection";
function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Experience />
      <ServicesSection/>
      <WhyChooseUs />
      <FAQSection/>
      <TeamSection/>
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
