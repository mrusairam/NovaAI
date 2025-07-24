import React from "react";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Testimonial from "./Components/Testimonial";

export default function App() {
  return (
    <>
    <div id="home">
      <Header />
      </div>

      <div id="hero">
        <Hero />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="reviews">
        <Testimonial />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="request">
        <Contact />
      </div>

      <Footer />
    </>
  );
}
