import React from "react";
// import Components 
import HeroBanner from "./HeroBanner";
import About from "./About";
import Claims from "./Claims";
import Clients from "./Clients";
import HealthCare from "./HealthCare";
import Utlize from "./Utlize";
import Consulting from "./Consulting";
import ContactForm from "./ContactForm";


const Home = () => {
  return (
    <div>
     
      <HeroBanner/> 
      <About />
      <HealthCare />
      <Claims />
      <Utlize />
      <Consulting />
      <Clients />
      <ContactForm />
    </div>
  );
};

export default Home;
