import React from "react";
import "./App.css";
import HeaderComponent from "./components/header";
import Hero from "./components/hero";
import OurServices from "./components/ourServices";
import ApplyFinancing from "./components/applyFinancing";
import ScheduleAppointment from "./components/scheduleAppointment";
import Benefits from "./components/benefits";
import Allies from "./components/allies";
import ScheduleReview from "./components/scheduleReview";
import EnjoyPromotions from "./components/enjoyPromotions";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <HeaderComponent />
      <section id="inicio">
        <Hero />
      </section>
      <section id="servicios">
        <OurServices />
        <ApplyFinancing />
        <ScheduleAppointment />
        <Benefits />
      </section>
      <section id="conocenos">
        <Allies />
        <ScheduleReview />
        <EnjoyPromotions />
      </section>
      <section id="contacto">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}

export default App;
