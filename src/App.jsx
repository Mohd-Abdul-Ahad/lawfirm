import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import Experience from "./Components/Experience";
import WhyChooseUs from "./pages/WhyChooseUs";
import Testimonials from "./pages/Testimonials";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Experience />
      <WhyChooseUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
